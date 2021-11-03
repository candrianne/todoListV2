import React from 'react';

function Todo({text, id, todos, setTodos}) {

    // Logic
    const deleteListener = () => {
        //console.log(id);
        setTodos(todos.filter(el => el.id !== id));
    };

    const completeListener = () => {
       setTodos(todos.map(el => {
           return el.id === id ? {...el, completed: !el.completed} : el;
       }));
    };

    // Render
    return(
        <div className="todo">
            <li className={`todo-item ${todos.find(el => el.id === id).completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeListener} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteListener} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;