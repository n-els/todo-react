import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
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
    <>
    <Header />
    <div className="max-w-lg p-10 my-10 bg-sky-800 mx-auto rounded-md">
      <h1 className="text-1xl font-bold text-center text-white mb-10">
        Todo's
      </h1>
      <main>
        <TodoForm handleTodoAdd={addTodoHandler} />
        <TodoList list={todoItems} handleTodoRemove={removeTodoHandler} />
      </main>
    </div>
    <Footer />
    </>
  );
};

export default App;
