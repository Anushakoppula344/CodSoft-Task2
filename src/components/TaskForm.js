/*import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, currentTask, updateTask }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentTask.id) {
      setText(currentTask.text);
    } else {
      setText('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask.id) {
      updateTask(currentTask.id, text);
    } else {
      addTask(text);
    }
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter task" 
        required 
      />
      <button type="submit">{currentTask.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
*/

import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, currentTask, updateTask }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentTask.id) {
      setText(currentTask.text);
    } else {
      setText('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask.id) {
      updateTask(currentTask.id, text);
    } else {
      addTask(text);
    }
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter task" 
        required 
      />
      <button type="submit">{currentTask.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;