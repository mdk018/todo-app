import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Keep return inside this App function!
  return (
    <div className="app">
      {/* Scrolling Message */}
      <div className="marquee-container">
        <p className="marquee-text">
          This website is built by <strong className="kaif-text">Mohammad Kaif</strong>
        </p>
      </div>

      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
