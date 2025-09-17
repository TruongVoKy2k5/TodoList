import { useState } from 'react'
import './App.css'
import todoInput from "/components/TodoInput.jsx";


function App() {
  const [todo, setTodo] = useState([]);

  const addTodo (text) => {
    setTodo([...todo, {
      todo = {
        id: Date.now(),
        text,
        completed: false
      }
    }])
  }
  return;
}

export default App
