import React from "react";

function ToDoItem(props){
    return(
        <li>
            <input
                type="checkbox"
                checked={props.done}
                onChange={() => props.handleCheckbox(props.id)}
            />
            {props.task}
            <button 
                type="button"
                onClick={() => props.deleteTask(props.id)}
            >x
            </button>
        </li>
    )
    
}

export default ToDoItem;