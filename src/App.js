import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState } from 'react';
// Dummy Data
const todos = [
  // { id: 1, text: 'müll rausbringen', done: false },
  // { id: 2, text: 'sport machen', done: false },
  // { id: 3, text: 'fenster putzen', done: false },
];

const App = () => {
  // instantiate state for the todo items (Array)
  const [todoItems, setTodoItems] = useState(todos);

  // handler for edit todo status
  const editTodoHandler = (id, done) => {
    const currentIndex = todoItems.findIndex(item => {
      return item.id === id;
    });
    const currentItemStatus = (todoItems[currentIndex].done =
      !todoItems[currentIndex].done);

    // Neues "Item"-Objekt erstellen und den Wert currentItemStatus der Eigenschaft "done" zuweisen.
    const currentItem = { ...todoItems[currentIndex], done: currentItemStatus };

    // Aktuelles todoItems - Array aus dem State in updatedTodos speichern
    const updatedTodos = todoItems;

    // Das Objekt am "currentIndex" vom updatedTodos-Array mit dem neuen "currentItem" austauschen
    updatedTodos[currentIndex] = currentItem;

    // aktualisiertes Array als neuen State setzen
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

  // The handler will be passing down to the Todo component
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
