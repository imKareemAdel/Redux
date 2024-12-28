// src/components/TodoItem.js

import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>Delete</button>
    </li>
  );
};

export default TodoItem;
