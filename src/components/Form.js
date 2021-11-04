import React, {Component} from 'react';


class Form extends Component {

    // Constructor
    constructor(props) {
        super(props);   
    }
    
    // Logic
    inputTextListener = (e) => { 
        //this.props.setCustomState("inputText", e.target.value);
        this.props.setInputText(e.target.value);
    };

    submitTodoListener = (e) => {
        e.preventDefault();
        this.props.setTodos();
    };

    statusListener = (e) => {
        this.props.setStatus(e.target.value);
    }

    // Render
    render() {
        return(
            <form>
                <input value={this.props.inputText} onChange={this.inputTextListener} type="text" className="todo-input" />
                <button onClick={this.submitTodoListener} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={this.statusListener} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        );
    }
};

export default Form;