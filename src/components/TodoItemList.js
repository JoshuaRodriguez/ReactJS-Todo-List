import React from 'react';
import TodoItem from './TodoItem';
import TodoListFilter from './TodoListFilter';

import '../components-css/TodoItemList.css';

class TodoItemList extends React.Component {

    countActiveItems = () => {
        let activeCount = 0;
        this.props.todoItems.forEach((todoItem) => {
            if (todoItem.status === 'active') {
                activeCount += 1;
            }
        });
        return activeCount;
    }

    getFilteredTodoItems = (filterSelected) => {
        return this.props.todoItems.map((todoItem) => {
            if (filterSelected === 'active' && todoItem.status === 'active') {
                return <TodoItem 
                            key={todoItem.id}
                            id={todoItem.id}
                            desc={todoItem.description} 
                            status={todoItem.status} 
                            deleteTodoItem={this.props.deleteTodoItem} 
                            changeTodoItemStatus={this.props.changeTodoItemStatus} />
            } else if (filterSelected === 'completed' && todoItem.status === 'completed') {
                return <TodoItem 
                            key={todoItem.id}
                            id={todoItem.id}
                            desc={todoItem.description} 
                            status={todoItem.status} 
                            deleteTodoItem={this.props.deleteTodoItem} 
                            changeTodoItemStatus={this.props.changeTodoItemStatus} />
            } else if (filterSelected === 'all') {
                return <TodoItem 
                            key={todoItem.id}
                            id={todoItem.id}
                            desc={todoItem.description} 
                            status={todoItem.status} 
                            deleteTodoItem={this.props.deleteTodoItem} 
                            changeTodoItemStatus={this.props.changeTodoItemStatus} />
            }
        });
    }

    render() {
        const filterSelected = this.props.filterSelected;
        const todoItemsLength = this.props.todoItems.length;
        let todoItemsList = <div></div>;

        if (todoItemsLength) {
            return (
                <div className="ui piled segments">
                    {this.getFilteredTodoItems(filterSelected)}
                    <TodoListFilter
                        itemCount={this.countActiveItems()} 
                        filterSelected={this.props.filterSelected}
                        setFilterToAll={this.props.setFilterToAll}
                        setFilterToActive={this.props.setFilterToActive}
                        setFilterToCompleted={this.props.setFilterToCompleted} />
                </div>
            )
        }

        return todoItemsList;
    }
}

export default TodoItemList;