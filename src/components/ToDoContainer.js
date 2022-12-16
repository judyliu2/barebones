import React, {useState} from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import ToDoFilter from "./ToDoFilter";
import {v4 as uuidv4} from "uuid";


function ToDoContainer(props) {
    let [tasks, setTasks] = useState([]);
    let [filter, setFilter] = useState("");
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

    let applyFilter = () => {
        switch(filter){
            case "active":
                setFilteredTasks(tasks.filter(task => 
                    task.done === false
                 ));
                break;
            case "done":
                setFilteredTasks(tasks.filter(task => 
                    task.done === true
                 ));
                break;
            default:
                setFilteredTasks(tasks)
        }
    }

    return (
        <div>
            <ToDoInput
                addTask={addTask}
                completeAll={selectAll}
                />
            <ToDoList
                tasks={tasks}
                handleCheckbox={handleCheckbox}
                deleteTask={deleteTask}
            />
            <ToDoFilter 
                numberOfTasks={tasks.filter(task => task.done !== true).length}
                updateFilter={setFilter}
                deleteDone={deleteDone}
            />
        </div>
    )

}

export default ToDoContainer;