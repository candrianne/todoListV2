import React from "react";


function Form({inputText, setInputText, setTodos, todos, setStatus}) {

    // Logic
    const inputTextListener = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoListener = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text : inputText, completed: false, id: Math.random() * 100000}
        ]);
        setInputText("");
    };

    const statusListener = (e) => {
        setStatus(e.target.value);
    }

    // Render
    return(
        <form>
            <input value={inputText} onChange={inputTextListener} type="text" className="todo-input" />
            <button onClick={submitTodoListener} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusListener} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;