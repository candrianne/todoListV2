import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);
  
  useEffect(() => {
    filterListener();
    saveToLocalStorage();
  }, [todos, status]);

  // Logic
  const filterListener = () => {
    switch(status) {
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if(localStorage.getItem('todos') === null)
        localStorage.setItem('todos', JSON.stringify([]))
    else 
        setTodos(JSON.parse(localStorage.getItem('todos')));
  };

  // Render
  return (
    <div className="App">
      <header>
        <h1>todo list</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
