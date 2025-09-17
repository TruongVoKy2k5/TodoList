import {useContext, useState} from "react";
import { TodoContext } from "../App";
export default function TodoForm() {
    const [text, setText] = useState("");
    const {addTodo} = useContext(TodoContext);
    function handleOnchangeInput(event){
        setText(event.target.value);
    }
    function handleFormSubmit(event){
        event.preventDefault();
        if(!text.trim()) return;
        addTodo(text);
        setText("");
    }
    return (
        <form onSubmit={handleFormSubmit}> 
            <input onChange={handleOnchangeInput} placeholder="What you want to do ?" value={text}></input>
            <button type="submit">Add</button>
        </form>
    )
}