import React, { useState } from 'react';
import './TodoApp.css'; // Import CSS styles
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoApp = () => {
  // State for the list of tasks
  const [todos, setTodos] = useState([]);

  // State to hold the current input text
  const [input, setInput] = useState('');

  // Function to handle form submission
  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!input.trim()) return; // Ignore empty input

    // Create a new todo object
    const newTodo = {
      id: Date.now(), // Unique ID
      text: input,
      completed: false,
    };

    // Add the new todo to the list
    setTodos([newTodo, ...todos]);
    setInput(''); // Clear input field
  };

  // Function to toggle the 'completed' status of a task
const toggleComplete = (id) => {
  // Update the 'todos' state using setTodos
  setTodos(
    // Use map to loop through each todo item
    todos.map((todo) =>
      // If the current todo's id matches the one clicked
      todo.id === id
        ? // Return a new object with all existing properties, but toggle 'completed'
        // Spread all properties of the todo
        
          { ...todo, completed: !todo.completed }
        : // Otherwise, return the todo as is
          todo
    )
  );
};


  // Function to delete a task
  const handleDelete = (id) => {
     // Filter out the todo with the matching id and update the state
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      {/* Form to add a new todo */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Display all todos */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}><RiDeleteBin6Line /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
