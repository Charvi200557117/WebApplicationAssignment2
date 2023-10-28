import React, { useState } from 'react';

function ToDoList() {
  // State variables to manage tasks and the new task input
  const [tasks, setTasks] = useState([]); // An array to store tasks
  const [newTask, setNewTask] = useState(''); // Input for adding new tasks

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      // Check if the new task input is not empty
      setTasks([...tasks, newTask]); // Add the new task to the tasks array
      setNewTask(''); // Clear the new task input for the next task
    }
  };

  // Function to delete a task from the list
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Create a new array without the task at the specified index
    setTasks(updatedTasks); // Update the tasks array with the new array
  };

  return (
    <div className="todo-list">
      <h3>To-Do List</h3>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          // Map through the tasks array to render each task
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            {/* Button to delete the task with the corresponding index */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
