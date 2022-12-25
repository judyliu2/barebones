import React, {useState} from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import ToDoFilter from "./ToDoFilter";
import {v4 as uuidv4} from "uuid";


function ToDoContainer(props) {
    let [tasks, setTasks] = useState([]);
    // let [filter, setFilter] = useState("");
    let [filteredTasks, setFilteredTasks] = useState([]);

    let handleCheckbox = (id) => {
        const newTasks = tasks.map(task => {
           if( task.id === id) {
            task.done = !task.done;
           }
           return task;
        });
        setTasks(newTasks);
    }

    let selectAll = (complete) => {
        const newTasks = tasks.map(task => {
            task.done = complete;
            return task;
         });
         setTasks(newTasks);
    }

    let deleteTask = (id) => {
        const newTasks = tasks.filter(task => 
            task.id !== id
         );
         setTasks(newTasks);
    }

    let addTask = (description) => {
        let newTask = {
            id: uuidv4(),
            description: description,
            done: false,
        };
        setTasks([...tasks, newTask]);
    }

    let deleteDone = () => {
        const newTasks = tasks.filter(task => 
            task.done !== true
         );
         setTasks(newTasks);
    }

    let applyFilter = (filter) => {
        switch(filter){
            case "active":
                setFilteredTasks(tasks.filter(task => 
                    task.done === false
                 ));
                 console.log("active")
                break;
            case "done":
                setFilteredTasks(tasks.filter(task => 
                    task.done === true
                 ));
                 console.log("done")
                break;
            default:
                setFilteredTasks(tasks)
        }
    }

    const containerStyle = { 
        textAlign: "center",
    }

    const centerStyle = {
        justifyContent: "center",
        display: "flex",
        padding: "20px",
        boxShadow: "3px 3px 5px 5px rgba(0, 0, 0, .2)"
    }

    return (
        <div style={centerStyle}>
            <div style={containerStyle}>
                <ToDoInput
                    addTask={addTask}
                    completeAll={selectAll}
                    />
                <ToDoList
                    tasks={filteredTasks}
                    handleCheckbox={handleCheckbox}
                    deleteTask={deleteTask}
                />
                <ToDoFilter 
                    numberOfTasks={tasks.filter(task => task.done !== true).length}
                    updateFilter={applyFilter}
                    deleteDone={deleteDone}
                />
            </div>
        </div>
    )

}

export default ToDoContainer;