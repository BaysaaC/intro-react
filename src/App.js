import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(
    ()=>{
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storedTodos) setTodos(storedTodos);
    },
    []
  );

  useEffect(
    () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, 
    [todos]
  );

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodoButton(event){
    const name = todoNameRef.current.value;
    if (name ==='') return 
    setTodos( previousTodos => {
      return [ 
          ...previousTodos, 
          { id: uuidv4(), name: name, complete: false }
      ]
    });
    todoNameRef.current.value = null
  }

  function handleClearTodosButton(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <Header />
      <input ref={todoNameRef} type="text" placeholder="Type a new To-Do" />
      <button type="button" onClick={handleAddTodoButton} >Add To-do</button>
      <hr />
      <TodoList list = { todos } toggleTodo={toggleTodo} />
      <button type="button" onClick={handleClearTodosButton}>Clear Completed To-do's</button>
      <Counter count = { todos.filter(todo => !todo.complete).length } />
    </>

  );
};

export default App;
