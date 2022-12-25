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

    const inputStyle = {
        height: "30px",
        margin: "10px",
    }

    const inputBarStyle = {
        display: "flex",
        justifyContent: "space-evenly",
    }

    const buttonStyle ={
        border: "none",
        borderRadius: "5px",
        backgroundColor: "rgb(248,235,126)",
        margin: "10px",
        padding: "8px"
    }
    return(
        <form style={inputBarStyle} onSubmit={submitTask}>
            <label>
                <input 
                    style={inputStyle}
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTask.description}
                    name="description"
                    onChange={writeTask}
                /> 
            </label>
            <button style={buttonStyle}>Submit</button>
        </form>
    )
}

export default ToDoInput;