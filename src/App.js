import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

/* check localstorage: if "todos" exists, 
convert the json string to a javascript object
if not, return an empty array */

const checkLocalStorage = () => {
  if (localStorage.getItem('todos')) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
};

// store the returned value in the constant todos

const todos = checkLocalStorage();

const App = () => {
  /* instantiate the status for the todoItems array,
  we pass the value of the todos constant here as the initial value */
  const [todoItems, setTodoItems] = useState(todos);

  /* whenever the state of the todoItems array changes, 
  the current state is passed to localstorage */
  useEffect(() => {
    const todoItemsAsJSON = JSON.stringify(todoItems);
    localStorage.setItem('todos', todoItemsAsJSON);
  }, [todoItems]);

  // handler for edit todo status
  const editTodoHandler = (id, done) => {
    const currentIndex = todoItems.findIndex(item => {
      return item.id === id;
    });
    const currentItemStatus = (todoItems[currentIndex].done =
      !todoItems[currentIndex].done);

    //  Create a new "Item" object and assign the currentItemStatus value to the "done" property.
    const currentItem = { ...todoItems[currentIndex], done: currentItemStatus };

    // Save current todoItems-Array in a new constant (updatedTodos)
    const updatedTodos = todoItems;

    // Replace the object at the "currentIndex" from the updatedTodos array with the new "currentItem".
    updatedTodos[currentIndex] = currentItem;

    // set updated array as new state
    setTodoItems([...updatedTodos]);
  };

  // The handler will be passing down to the TodoForm component
  const addTodoHandler = input => {
    let newTodoItems = [
      { id: todoItems.length + 1, text: input, done: false },
      ...todoItems,
    ];
    setTodoItems(newTodoItems);
  };

  // This handler will be passing down to the Todo component and need to be called there
  const removeTodoHandler = id => {
    const filteredTodos = todoItems.filter(item => item.id !== id);
    setTodoItems(filteredTodos);
  };

  return (
    <>
      <Header />
      <main className="max-w-xl rounded-md mt-24 p-12 backdrop-blur shadow-slate-100 mx-auto">
        <h1 className="text-center text-indigo-700 mb-6 text-3xl font-light">
          Was möchtest Du tun?
        </h1>
        <div className="backdrop-blur p-3">
          <TodoForm handleTodoAdd={addTodoHandler} />
          <TodoList
            list={todoItems}
            handleTodoRemove={removeTodoHandler}
            handleEdit={editTodoHandler}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
