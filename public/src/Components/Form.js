import React from 'react';

const Form = (props) => {
    const taskTextHandler = (e) => {
        props.setInputText(e.target.value);
    }
    const priorityHandler = (e) => {
        props.setPriority(e.target.value);
    }
    const submitTaskHandler = (e) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos,{
                text: props.inputText,
                completed:false,
                priority:props.priority,
                id:Math.random()*1000
            }

        ]);
        props.setInputText('');
        props.setPriority('Low');
    }
    return (
        <form className="addTask">
            <input value={props.inputText}  onChange={taskTextHandler} type="text" name="Add" id="addTask" placeholder="Add a Task " />
            <div className="optionWappers">
                <div className="form-group givePriority">
                    <select onChange={priorityHandler} value={props.priority}>
                        <option value={1}>Low</option>
                        <option value={2}>Normal</option>
                        <option value={3}>High</option>
                    </select>
                </div>
                <button onClick={submitTaskHandler} type="submit">Add</button>
            </div>
        </form>
    );
}
export default Form; 