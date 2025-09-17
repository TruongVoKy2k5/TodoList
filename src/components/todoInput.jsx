import {useState} from "react";
export default function TodoInput() {
    const [text, setText] = useState("");
    function handleOnchangeInput(event){
        setText(event.target.value);
    }
    function handleFormSubmit(event){
        event.preventDefault();
    }
    return (
        <form onSubmit={handleFormSubmit}> 
            <input onChange={handleOnchangeInput} placeholder="What you want to do ?" value={text}></input>
            <button  type="submit">Add</button>
        </form>
    )
}