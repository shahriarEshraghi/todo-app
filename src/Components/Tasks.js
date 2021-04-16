import React from 'react';
import Task from './Task.js';

const Tasks = (props) => {
    return (
        <React.Fragment>
            <div className='listTitle'>
                <p className={'task-text'}>Task Name</p>
                <p className={'priority-title'}>Priority</p>
                <p className={'pin-width'}>Pin</p>
            </div>
            <div className="taskWapper">
                {props.filteredTodos.map((item) => (
                    <Task 
                        setTodos={props.setTodos}
                        todos={props.todos}
                        key={item.id}
                        todo={item}
                        text={item.text}
                        priority={item.priority}
                        priorityText = {props.priorities.find(x=> x.value === +item.priority).name}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}
export default Tasks;