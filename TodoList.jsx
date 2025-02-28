import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggleComplete, onEdit, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
