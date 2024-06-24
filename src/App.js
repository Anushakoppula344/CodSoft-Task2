/*import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({ text: '', id: null });

  const addTask = (text) => {
    setTasks([...tasks, { text, id: Date.now(), completed: false }]);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} currentTask={currentTask} updateTask={updateTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
    </div>
  );
};

export default App;
*/



import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({ text: '', id: null });

  const addTask = (text) => {
    setTasks([...tasks, { text, id: Date.now(), completed: false }]);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} currentTask={currentTask} updateTask={updateTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
    </div>
  );
};

export default App;