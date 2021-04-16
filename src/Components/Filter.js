import React from 'react';

export default function Filter(props) {
    const  statusHandler = (e) =>{
        return(
            props.setStatus(e.target.value)
        );
    }
    return(
        <div className="form-group">
            <label htmlFor="select" className="control-label">Priority :</label>
            <select onChange={statusHandler}>
                <option value="0">All</option>
                {props.priorities.map((item) => (
                <option key={item.value} value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}