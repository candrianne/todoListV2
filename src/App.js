import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {

  // Contrsuctor
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      todos: [],
      status: "all",
      filteredTodos: []
    }
  }

  // setters

  // use this form to prevent calling the "bind" function in the constructor
  /*setCustomState = (stateProperty, value) => {
    console.log(this.state);
    console.log(stateProperty, value);
    this.setState({stateProperty: value}); 
    console.log(this.state);
    console.log(this.state[stateProperty]); 
  }*/
  setInputText = (value) => {
    this.setState({...this.state, inputText: value});
  }

  setTodos = (id) => {
    id ?
    this.setState({...this.state, todos: this.state.filteredTodos.map(el => {
      return el.id === id ? {...el, completed: !el.completed} : el;
    })}) : 
    this.setState({
      ...this.state, 
      todos: [...this.state.todos, {text : this.state.inputText, completed: false, id: Math.random() * 100000}]
    });
  }

  setStatus = (value) => {
    this.setState({...this.state, status: value});
  }

  setFilteredTodos = (id) => {
    this.setState({
      ...this.state, 
      filteredTodos: this.state.filteredTodos.filter((el) => el.id !== id)
    });
  }

  componentDidMount() {
    console.log("mount");
    this.getLocalStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    if(prevState.todos !== this.state.todos || prevState.status !== this.state.status) {
      this.filterListener();
      this.saveToLocalStorage();
    }
  }

  // Logic
  filterListener() {
    switch(this.state.status) {
      case 'completed' :
        this.setState({...this.state, filteredTodos: this.state.todos.filter(todo => todo.completed)});
        break;
      case 'uncompleted':
        this.setState({...this.state, filteredTodos: this.state.todos.filter(todo => !todo.completed)});
        break;
      default:
        this.setState({...this.state, filteredTodos: this.state.todos});
    }
  };

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  getLocalStorage() {
    if(localStorage.getItem('todos') === null)
        localStorage.setItem('todos', JSON.stringify([]))
    else 
        this.setState({...this.state, todos: JSON.parse(localStorage.getItem('todos'))});
  };

  // Render
  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.inputText}</h1>
        </header>
        <Form 
          todos={this.state.todos} 
          setTodos={this.setTodos}
          inputText={this.state.inputText} 
          setInputText={this.setInputText}
          status={this.state.status}
          setStatus={this.setStatus}
        />
        <TodoList filteredTodos={this.state.filteredTodos} setFilteredTodos={this.setFilteredTodos} todos={this.state.todos} setTodos={this.setTodos}/>
      </div>
    );
  }
}

export default App;
