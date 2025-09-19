import {useContext, useState} from "react";
import { TodoContext } from "../App";
export default function TodoForm() {
    const [text, setText] = useState("");
    const [deadline, setDeadline] = useState("");
    const {addTodo} = useContext(TodoContext);
    function handleOnchangeInput(event){
        setText(event.target.value);
    }
    function handleDeadlineInput(event){
        setDeadline(event.target.value)
    }
    function handleFormSubmit(event){
        event.preventDefault();
        if(!text.trim()) return alert("It cant be blank!");
        if(text.length < 3){
            alert("The text is too short!");
        }
        if(text.length > 100){
            alert("The text is too long!");
        }
        addTodo(text.trim(), deadline);
        setText("");
        setDeadline("");
    }
    return (
        <form onSubmit={handleFormSubmit}> 
            <input onChange={handleOnchangeInput} onKeyDown={(e) => {if(e.key === "Enter") handleFormSubmit(e)}} placeholder="What you want to do ?" value={text}></input>
            <input onChange={handleDeadlineInput} placeholder="Finish until..." value={deadline}></input>
            <button type="submit">Add</button>
        </form>
    )
}