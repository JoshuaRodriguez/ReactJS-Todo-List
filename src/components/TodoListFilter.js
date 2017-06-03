import React from 'react';
import '../components-css/TodoListFilter.css';

class TodoListFilter extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <span className="item-count">{this.props.itemCount} items left</span>
                <ul className="list-filter">
                    <li>
                        <a href="#/all" 
                           className={this.props.filterSelected === 'all' ? 'currently-selected-filter' : ''}
                           onClick={this.props.setFilterToAll}>All</a>
                    </li>
                    <li>
                        <a href="#/active" 
                        className={this.props.filterSelected === 'active' ? 'currently-selected-filter' : ''}
                        onClick={this.props.setFilterToActive}>Active</a>
                    </li>
                    <li>
                        <a href="#/completed" 
                        className={this.props.filterSelected === 'completed' ? 'currently-selected-filter' : ''}
                        onClick={this.props.setFilterToCompleted}>Completed</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TodoListFilter;