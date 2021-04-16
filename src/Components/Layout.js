import React,{useState} from 'react';
import Tasks from './Tasks.js';
import Filter from './Filter';

export default function Layout() {

    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('Low');
    const [taskData, setTaskData] = useState([]);

    let index= 0;

    const taskNameHandler = (e) => {
        setTaskName(e.target.value)
    }

    const priorityHandler = (e) => {
        setPriority(e.target.value)
    }

    const tasksubmitHandler = (e) => {
        e.preventDefault();
        setTaskData([
            ...taskData,{
                id: index+1,
                title: taskName,
                priority : priority,
            }
        ])
        console.log(taskData)
    }

    return (
        <div className="todoListWapper">
            <div className="todoList">

                <h1><span>My</span> Tasks </h1>
                <div className='list'>
                    <Filter />
                    <Tasks taskData={taskData}/>
                </div>
                <form className="addTask" onSubmit={tasksubmitHandler}>

                    <input onChange={taskNameHandler} type="text" name="Add" id="addTask" placeholder="Add a Task " />
                    <div className="optionWappers">
                        <div className="form-group givePriority">
                            <select onChange={priorityHandler}>
                                <option>Low</option>
                                <option>Normal</option>
                                <option>High</option>
                            </select>
                        </div>
                        <button type="submit">Add</button>
                    </div>
                </form>

            </div>
        </div>
    );

}
