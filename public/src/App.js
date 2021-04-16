import React, { useState,useEffect } from 'react';
import Tasks from './Components/Tasks';
import Filter from './Components/Filter';
import Form from './Components/Form';
import './Assets/css/style.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    const filterHandler = () => {
      switch (status) {
        case 'Low':
          setFilteredTodos(todos.filter(todo => todo.priority === 'Low'))
          break;
        case 'Normal' :
          setFilteredTodos(todos.filter(todo => todo.priority === 'Normal'))
          break;
        case 'High' :
          setFilteredTodos(todos.filter(todo => todo.priority === 'High'))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  },[todos,status]);
  

  return (
    <div className="todoListWapper">
      <div className="todoList">

        <h1><span>My</span> Tasks </h1>
        <div className='list'>
          <Filter  status={status} setStatus={setStatus}  />
          <Tasks todos={todos}  setTodos={setTodos}  filteredTodos={filteredTodos}/>
        </div> 
        <Form 
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          priority={priority}
          setPriority={setPriority} />

      </div>
    </div>
  );
}

export default App;
