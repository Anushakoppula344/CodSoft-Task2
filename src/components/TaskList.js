/*import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
          editTask={editTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
*/

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
          editTask={editTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;