import React from "react";
import { fontFamily } from "styled-system";

function ToDoItem(props){
    const taskStyle = {
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
    }
    const buttonStyle = {
        border: "none",
        backgroundColor: "transparent",
    }
    return(
        <li style={taskStyle}>
            <input
                type="checkbox"
                checked={props.done}
                onChange={() => props.handleCheckbox(props.id)}
            />
            {props.task}
            <button style={buttonStyle}
                type="button"
                onClick={() => props.deleteTask(props.id)}
            >x
            </button>
        </li>
    )
    
}

export default ToDoItem;