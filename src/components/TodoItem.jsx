import React, { useState } from 'react';

const TodoItem = ({ task, onToggleComplete, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditClick = () => {
    if (isEditing) {
      onEdit(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>
      )}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
