import { useState, useEffect, createContext } from 'react'
import './App.css'
import TodoForm from './components/todoForm.jsx';
import TodoItems from './components/todoItems.jsx';
import useTodos from './components/useTodos.jsx';
const TodoContext = createContext();
export default function App() {
  const [filter, setFilter] = useState("all");
  const {todos, addTodo, toggleTodo, deleteTodo, updateTodo, filterTodos, todoCounter, clearCompleted, toggleAll} = useTodos(filter);
  return(
      <TodoContext.Provider value={{todos, addTodo, toggleTodo, deleteTodo, updateTodo, filter, setFilter, filterTodos, todoCounter, clearCompleted, toggleAll}}>
        <div className="app">
          <h1>TO DO APP!</h1>
          <h2>Don't give up! I know you can do it!</h2>
          <TodoForm/>
          <TodoItems/>
        </div>
      </TodoContext.Provider>
  )
}
export {TodoContext};



