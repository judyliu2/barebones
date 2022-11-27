import React, {useState} from "react";

function ToDoFilter(props){
    let [filter, setFilter] = useState("");

    let addFilter = (f) => {
        console.log(f)
        filter = setFilter(f);
        props.updateFilter(filter);
    }

    return (
        <div>
            <p>{props.numberOfTasks} items left</p>
            <button onClick={() => addFilter("all")}>All</button>
            <button onClick={() => addFilter("active")}>Active</button>
            <button onClick={() =>  addFilter("done")}>Done</button>
            <button onClick={props.deleteDone}>Clear completed</button>
        </div>
    )
}

export default ToDoFilter;