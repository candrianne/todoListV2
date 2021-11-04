import React, {Component} from 'react';

class Todo extends Component {

    // Constructor
    constructor(props) {
        super(props);
    }

    // Logic
    deleteListener = () => {
        this.props.setFilteredTodos(this.props.id);
    };

    completeListener = () => {
        this.props.setTodos(this.props.id);
    };

    // Render
    render() {
        return(
            <div className="todo">
                <li className={`todo-item ${this.props.filteredTodos.find(el => el.id === this.props.id).completed ? "completed" : ""}`}>{this.props.text}</li>
                <button onClick={this.completeListener} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={this.deleteListener} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        );
    }
};

export default Todo;