import React, {useState, useEffect} from 'react';
import Tasks from './Components/Tasks';
import Filter from './Components/Filter';
import Form from './Components/Form';
import sortByKey from './Assets/js/utilities';
import './Assets/css/style.css';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [priority, setPriority] = useState(1);
    const [status, setStatus] = useState(0);
    const [filteredTodos, setFilteredTodos] = useState([]);

    const priorities = [
        {
            name: 'low',
            value: 1
        },
        {
            name: 'normal',
            value: 2
        },
        {  name: 'high',
            value: 3
        }
    ];

    useEffect(() => {

        const filterHandler = () => {
            let newTodos = status == "0" ? todos : todos.filter(todo => todo.priority == status);
            setFilteredTodos(newTodos);
        };
        setFilteredTodos(sortByKey(todos, 'priority', false));
        setFilteredTodos(sortByKey(todos, 'completed', true));
        filterHandler();
    }, [todos, status]);


    return (
        <div className="todoListWapper">
            <div className="todoList">

                <h1><span>My</span> Tasks </h1>
                <div className='list'>
                    <Filter status={status} setStatus={setStatus} priorities={priorities}/>
                    <Tasks todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} priorities={priorities}/>
                </div>
                <Form
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                    priority={priority}
                    setPriority={setPriority}
                    priorities={priorities}/>

            </div>
        </div>
    );
}

export default App;
