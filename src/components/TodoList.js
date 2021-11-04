import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {

	// Constructor
	constructor(props) {
		super(props);
	}

	// Render
	render() {
		return(
			<div className="toto-container">
				<ul className="todo-list">
					{this.props.filteredTodos.map(todo => (
						<Todo 
						  filteredTodos={this.props.filteredTodos}
						  setFilteredTodos={this.props.setFilteredTodos}
						  todos={this.props.todos}
						  setTodos={this.props.setTodos}
						  text={todo.text} 
						  key={todo.id}
						  id={todo.id}
						/>
					))}
				</ul>
			</div>
		);
	}
};

export default TodoList;