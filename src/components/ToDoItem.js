import React from "react";

function ToDoItem(props){
    const taskStyle = {
        fontSize: "16px",
        justifyContent: "space-between",
        display: "flex",
        padding: "0 10px 0 10px"
    }
    const buttonStyle = {
        border: "none",
        backgroundColor: "transparent",
        fontWeight: "1000",
        color: "rgba(175,26,26,0.8)"
    }

    const checkStyle = {
        color: "rgba(130,221,84)"
    }
    return(
        <li style={taskStyle}>
            <div> 
                <input
                    type="checkbox"
                    style={checkStyle}
                    checked={props.done}
                    onChange={() => props.handleCheckbox(props.id)}
                />
                {props.task}
            </div>
            <button style={buttonStyle}
                type="button"
                onClick={() => props.deleteTask(props.id)}
            >x
            </button>
        </li>
    )
    
}

export default ToDoItem;