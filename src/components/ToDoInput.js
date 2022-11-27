import React, {useState} from "react";

function ToDoInput(props){
    const [newTask, setNewTask] = useState({
        description: ""
    });

    let writeTask = (e) => {
        setNewTask({[e.target.name]: e.target.value})
    }

    let submitTask = (e) => {
        e.preventDefault();
        if(newTask.description.trim()){
            props.addTask(newTask.description);
            setNewTask({description: ""});
        }
    }
    return(
        <form onSubmit={submitTask}>
            <label>
                <input 
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTask.description}
                    name="description"
                    onChange={writeTask}
                /> 
            </label>
            <button>Submit</button>
        </form>
    )
}

export default ToDoInput;