import { useState, createContext } from 'react'
import './App.css'
import TodoForm from './components/TodoForm.jsx';
import TodoItems from './components/todoItems.jsx';
const TodoContext = createContext();
export default function App() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const addTodo = (text) => {
        setTodos([...todos, {
            id: Date.now(),
            text,
            completed: false
        }]);
    }
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo )
        );
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const updateTodo = (id, newText) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, text : newText} : todo));
    }
  return(
      <TodoContext.Provider value={{todos, addTodo, toggleTodo, deleteTodo, updateTodo, filter, setFilter}}>
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



