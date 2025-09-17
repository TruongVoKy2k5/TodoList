import { useState, createContext, Children } from 'react'
import './App.css'
import TodoForm from './components/todoForm.jsx';
import TodoList from './components/todoList.jsx';
const TodoContext = createContext();
export default function App() {
  return(
      <TodoContext.Provider value={{todos, addTodo, toggleTodo, deleteTodo, newText}}>
        <div className="app">
          <h1>To do app</h1>
          <TodoForm/>
          <TodoList/>
        </div>
      </TodoContext.Provider>
  )
}
export {TodoContext};



