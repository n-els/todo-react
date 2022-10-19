import React from 'react';
import Todo from './Todo';

const TodoList = ({ list, handleTodoRemove, handleEdit }) => {
  return (
    <ul className="mt-4">
      {list.map(todo => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            handleTodoRemove={handleTodoRemove}
            handleEdit={handleEdit}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
