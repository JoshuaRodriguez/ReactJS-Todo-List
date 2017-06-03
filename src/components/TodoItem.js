import React from 'react';
import '../components-css/TodoItem.css';

class TodoItem extends React.Component {

    deleteTodoItemClicked = () => {
        this.props.deleteTodoItem(this.props.id);
    };

    toggleTodoItem = () => {
        if (this.props.status === 'active') {
            this.props.changeTodoItemStatus(this.props.id, 'completed');
        } else if (this.props.status === 'completed') {
            this.props.changeTodoItemStatus(this.props.id, 'active');
        }
    };

    changeCheckBoxIcon = () => {
        let cssStyle = "";
        if (this.props.status === 'active') {
            cssStyle = "square outline icon";
        } else if (this.props.status === 'completed') {
            cssStyle = "checkmark box icon";
        }
        return cssStyle;
    }

    crossOutDescription = () => {
        let cssStyle = "";
        if (this.props.status === 'completed') {
            cssStyle = "crossed-out-todo";
        }
        return cssStyle;
    }

    render() {
        return (
            <div className="ui segment">
                <p className={this.crossOutDescription()}>{this.props.desc}</p>
                <div className="complete-edit-erase-container">
                    <div className="complete-edit-erase-icons">
                        <i className={this.changeCheckBoxIcon()} onClick={this.toggleTodoItem}></i>
                        <i className="erase icon" onClick={this.deleteTodoItemClicked}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoItem;