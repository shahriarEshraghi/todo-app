import React from 'react';



 const Task = (props) => {
    const completeHandler = () => {
        props.setTodos( props.todos.map((item) => {
                if (item.id === props.todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };

                }
                return item;
            })
        );
    };
    return (
        <React.Fragment>
            <div className={`checkbox ${props.todo.completed ? "completed" : ""}`}>
                <label >
                    <input type="checkbox" onClick={completeHandler} />
                    <i className="CheckIcon"></i>
                    {props.text}
                </label>

                <label>{props.priorityText}</label>

            </div>
        </React.Fragment>
    );
}
export default Task;

