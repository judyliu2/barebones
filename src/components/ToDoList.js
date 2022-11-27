import React from "react";
import ToDoItem from "./ToDoItem"

function ToDoList(props){
    return (
        <div>
            <ul>
            {props.tasks.map(task => 
                <ToDoItem 
                    key={task.id}
                    id={task.id}
                    task={task.description}
                    done={task.done}
                    handleCheckbox={props.handleCheckbox}
                    deleteTask={props.deleteTask}
                />
            )}
            </ul>
        </div>
    )
}

export default ToDoList;