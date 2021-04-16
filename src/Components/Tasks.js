import React from 'react';
import Task from './Task.js';

const Tasks = (props) => {
    return (
        <React.Fragment>
            <div className='listTitle'>
                <p>Task Name</p>
                <p>Priority</p>
                <p>Pin</p>
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