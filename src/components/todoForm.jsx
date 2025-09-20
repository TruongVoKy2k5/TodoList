import {useContext, useState} from "react";
import { TodoContext } from "../App";
export default function TodoForm() {
    const [text, setText] = useState("");
    const [deadline, setDeadline] = useState("");
    const [priority, setPriority] = useState("medium");
    const {addTodo, getPriorityColor} = useContext(TodoContext);

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
           return alert("The text is too short!");
        }
        if(text.length > 100){
           return alert("The text is too long!");
        }
        addTodo(text.trim(), deadline, priority);
        setPriority("medium");
        setText("");
        setDeadline("");
    }

    return (
        <form onSubmit={handleFormSubmit}> 
            <input onChange={handleOnchangeInput} onKeyDown={(e) => {if(e.key === "Enter") handleFormSubmit(e)}} placeholder="What you want to do ?" value={text}></input>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
            </select>
            <input onChange={handleDeadlineInput} placeholder="Finish until..." value={deadline}></input>
            <button type="submit">Add</button>
        </form>
    )
}