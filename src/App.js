import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

// Dummy Data
const todos = [
  { id: 1, text: 'müll rausbringen', done: false },
  { id: 2, text: 'sport machen', done: false },
  { id: 3, text: 'fenster putzen', done: false },
];

const App = () => {
  // instantiate state for the todo items (Array)
  const [todoItems, setTodoItems] = useState(todos);

  // The handler will be passing down to the TodoForm component
  const addTodoHandler = input => {
    let newTodoItems = [
      { id: todoItems.length + 1, text: input, done: false },
      ...todoItems,
    ];
    setTodoItems(newTodoItems);
  };

  // The handler will be passing down to the Todo component
  const removeTodoHandler = id => {
    const filteredTodos = todoItems.filter(item => item.id !== id);
    setTodoItems(filteredTodos);
  };

  return (
    <div className="container max-w-lg p-10 mx-auto bg-green-400">
      <h1 className="text-3xl font-bold text-center">
        My Todo List with React.js
      </h1>

      <main>
        <TodoForm handleTodoAdd={addTodoHandler} />
        <TodoList list={todoItems} handleTodoRemove={removeTodoHandler} />
      </main>
    </div>
  );
};

export default App;
