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
    <div className="mt-5 text-center">
      <form action="" onSubmit={submitHandler}>
        <input
          className="p-4 w-3/4"
          type="text"
          name="inputTodo"
          id="inputTodo"
          value={inputValue}
          placeholder="my new todo"
          onChange={inputTodoFieldChangeHandler}
          required
        />
        <button
          className="ml-4 p-4 bg-green-600 hover:bg-green-800"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
