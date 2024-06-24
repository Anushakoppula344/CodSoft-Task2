/*import React from 'react';

const Task = ({ task, deleteTask, toggleComplete, editTask }) => {
  return (
<div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <div className="actions">
        <button onClick={() => editTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
*/

/*
import React from 'react';

const Task = ({ task, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
        <button onClick={() => editTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
*/
import React from 'react';

const Task = ({ task, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="actions">
        <button 
          className={task.completed ? 'incomplete-btn' : 'complete-btn'}
          onClick={() => toggleComplete(task.id)}
        >
          {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
        <button className="edit-btn" onClick={() => editTask(task)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;