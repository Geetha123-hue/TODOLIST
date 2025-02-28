import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodo onAdd={addTask} />
      <TodoList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
