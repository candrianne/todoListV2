import React from 'react';
import Todo from './Todo';

function TodoList({todos, setTodos}) {
   return(
	   <div className="toto-container">
		   <ul className="todo-list">
			   {todos.map(todo => (
				   <Todo 
					 todos={todos} 
					 setTodos={setTodos} 
					 text={todo.text} 
					 key={todo.id}
					 id={todo.id}
				   />
			   ))}
		   </ul>
	   </div>
   );
};

export default TodoList;