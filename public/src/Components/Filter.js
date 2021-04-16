import React from 'react';

export default function Filter(props) {
    const  statusHandler = (e) =>{
        return(
            props.setStatus(e.target.value)
        );
    }
    return(
        <div className="form-group">
            <label htmlFor="select" className="control-label">Filter :</label>
            <select onChange={statusHandler}>
                <option>All</option>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
            </select>
        </div>
    );
}