// src/components/TodoForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
