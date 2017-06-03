import React from 'react';
import '../components-css/TodoInputField.css';

class TodoInputField extends React.Component {

    state = {
        inputFieldValue: ''
    };

    handleInput = (e) => {
        this.setState({
            inputFieldValue: e.target.value
        });
    };

    handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.createNewTodoItem(this.state.inputFieldValue);
            this.resetInputField();
        }
    };

    createNewTodoItem = () => {
        this.props.addNewTodoItem(this.state.inputFieldValue);
        this.resetInputField();
    };

    resetInputField = () => {
        this.setState({
            inputFieldValue: ''
        });
    };

    render() {
        return (
            <div className="ui fluid input">
                <input type="text" placeholder="Enter a todo..." value={this.state.inputFieldValue} onKeyPress={this.handleOnKeyPress} onChange={this.handleInput}/>
                <button className="ui button" onClick={this.createNewTodoItem}>Add</button>
            </div>
        )
    }
}

export default TodoInputField;