import { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const initialTasks = [
    { id: self.crypto.randomUUID(), text: 'Drink some coffee' },
    { id: self.crypto.randomUUID(), text: 'Create a TODO app' },
    { id: self.crypto.randomUUID(), text: 'Drink some more coffee' }
];

/**
 * Todo component represents the main TODO list application.
 * It allows users to add new tasks, delete tasks, and move tasks up or down in the list.
 * The component maintains the state of the task list and the new task input.
 */
function TodoList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskText, setNewTaskText] = useState('');

    function handleInputChange(event) {
        setNewTaskText(event.target.value);
    }

    function addTask(event) {
        if (newTaskText.trim()) {
            setTasks(t => [...t, { id: self.crypto.randomUUID(), text:newTaskText}]);
            setNewTaskText('');
        }
        event.preventDefault();
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter(task=>task.id != id);
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
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
    <article
        className="todo-list"
        aria-label="task list manager">
        <header>
            <h1>TODO</h1>
                <form
                    className="todo-input"
                    onSubmit={addTask}
                    aria-controls="todo-list">
                <input
                    type="text"
                    required
                    autoFocus
                    placeholder="Enter a task"
                    value={newTaskText}
                    aria-label="Task text"
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    aria-label="Add task">
                    Add
                </button>
            </form>
        </header>
        <ol id="todo-list" aria-live="polite" aria-label="task list">
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
    </article>
    );
}

export default TodoList;