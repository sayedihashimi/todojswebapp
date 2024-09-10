import React, { useState } from 'react'
import './Todo.css'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';

/**
 * Todo component represents the main TODO list application.
 * It allows users to add new tasks, delete tasks, and move tasks up or down in the list.
 * The component maintains the state of the task list and the new task input.
 *
 * @returns {JSX.Element}
 */
function Todo() {
    const [tasks, setTasks] = useState([
        {id: uuidv4(), text: "Drink some coffee"},
        {id: uuidv4(), text: "Create a TODO app"},
        {id: uuidv4(), text: "Drink some more coffee"}]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { id:uuidv4(), text:newTask}]);
            setNewTask("");
        }
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter(task=>task.id !== id);
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
                    <TodoItem
                        key={task.id}
                        task={task.text}
                        deleteTaskCallback={() => deleteTask(task.id)}
                        moveTaskUpCallback={() => moveTaskUp(index)}
                        moveTaskDownCallback={()=>moveTaskDown(index)}
                    />
                )}
            </ol>
        </div>
    );
}

export default Todo;