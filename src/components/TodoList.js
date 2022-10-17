import React from 'react';
import Todo from './Todo';

const TodoList = ({ list, handleTodoRemove }) => {
  return (
    <ul className="mt-4 text-center">
      {list.map(todo => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            handleTodoRemove={handleTodoRemove}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
