import React from 'react';

const Todo = ({ text, id, handleTodoRemove }) => {
  const deleteHandler = id => {
    handleTodoRemove(id);
  };
  return (
    <li className="bg-green-200 mb-2 p-1">
      {text}{' '}
      <button
        onClick={() => {
          deleteHandler(id);
        }}
        className="rounded-full bg-red-300 p-1"
      >
        X
      </button>
    </li>
  );
};

export default Todo;
