import React, {useState} from "react";

function ToDoFilter(props){

    let addFilter = (f) => {
        props.updateFilter(f);
    }

    const filtersStyle = {
        display: "flex",
        justifyContent: "space-evenly",
    }

    const buttonStyle = {
        border: "none",
        borderRadius: "5px",
        backgroundColor: "rgb(248,235,126)",
        padding: "8px"
    }

    return (
        <div>
            <p>{props.numberOfTasks} items left</p>
            <div style={filtersStyle}>
                <button style={buttonStyle} onClick={() => addFilter("all")}>All</button>
                <button style={buttonStyle} onClick={() => addFilter("active")}>Active</button>
                <button style={buttonStyle} onClick={() =>  addFilter("done")}>Done</button>
                <button style={buttonStyle} onClick={props.deleteDone}>Clear completed</button>
            </div>
        </div>
    )
}

export default ToDoFilter;