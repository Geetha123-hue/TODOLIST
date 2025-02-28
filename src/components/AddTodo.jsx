import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAdd(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
