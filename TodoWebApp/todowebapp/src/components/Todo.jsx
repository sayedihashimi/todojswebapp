import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const [tasks, setTasks] = useState([
        "Drink some coffee",
        "Create a TODO app",
        "Drink some more coffee"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div id="main">
            <h1>TODO</h1>
            <div id="todo-input">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <ol id="todo-list">
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>
                            🗑️
                        </button>
                        <button className="up-button" onClick={() => moveTaskUp(index)}>
                            ⇧
                        </button>
                        <button className="down-button" onClick={() => moveTaskDown(index)}>
                            ⇩
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Todo;