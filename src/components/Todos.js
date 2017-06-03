import React from 'react';
import TodoInputField from './TodoInputField';
import TodoItemList from './TodoItemList';

import '../components-css/Todo.css';

class Todos extends React.Component {

    state = {
        todoItems: [],
        filterSelected: 'all'
    };

    setFilterToAll = () => {
        this.setState({
            filterSelected: 'all'
        });
    };

    setFilterToActive = () => {
        this.setState({
            filterSelected: 'active'
        });
    };

    setFilterToCompleted = () => {
        this.setState({
            filterSelected: 'completed'
        });
    };

    deleteTodoItem = (todoItemId) => {
        this.setState({
            todoItems : this.state.todoItems.filter(todoItem => todoItem.id !== todoItemId)
        });
    };

    changeTodoItemStatus = (todoItemId, newStatus) => {
        this.setState({
            todoItems: this.state.todoItems.map((todoItem) => {
                if (todoItem.id === todoItemId) {
                    return Object.assign({}, todoItem, {
                        status: newStatus
                    });
                } else {
                    return todoItem
                }
            })
        });
    };

    addNewTodoItem = (description) => {
        let newTodoItem = {
            id: uuid.v4(), // eslint-disable-line no-undef
            description: description,
            status: 'active'
        };

        this.setState({
            todoItems: this.state.todoItems.concat(newTodoItem)
        });
    };

    render() {
        console.log(this.state.todoItems);
        return (
            <div className="ui container">
                <h2>Todos in React.Js</h2>
                <TodoInputField addNewTodoItem={this.addNewTodoItem} />
                <TodoItemList
                    todoItems={this.state.todoItems}
                    filterSelected={this.state.filterSelected}
                    setFilterToAll={this.setFilterToAll}
                    setFilterToActive={this.setFilterToActive}
                    setFilterToCompleted={this.setFilterToCompleted} 
                    deleteTodoItem={this.deleteTodoItem}
                    changeTodoItemStatus={this.changeTodoItemStatus} />
            </div>
        )
    };
}

export default Todos;