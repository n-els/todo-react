import React, { useState } from 'react';

const TodoForm = ({ handleTodoAdd }) => {
  const [inputValue, setInputValue] = useState('');
  const inputTodoFieldChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    handleTodoAdd(inputValue);
    setInputValue('');
  };

  return (
    <div className="d-block">
      <form action="" className="flex justify-between" onSubmit={submitHandler}>
        <input
          className="p-4 w-full rounded-tl-md rounded-bl-md"
          type="text"
          name="inputTodo"
          id="inputTodo"
          value={inputValue}
          placeholder="Was möchtest Du tun?"
          onChange={inputTodoFieldChangeHandler}
          required
        />
        <button
          className="px-3 py-2 bg-amber-500 rounded-tr-md rounded-br-md text-white text-1xl"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
