import { useState } from "react";
import "./Todo.css";
import TodoList from "./TodoList";

const Todos = () => {

    const [text, setText] = useState("");
    const [todosList, setTodosList] = useState([]);
    const handleChange = (e) => {
        console.log("input changed", e.target.value);
        setText(e.target.value);
    }

    const payload = { status: false, title: text };

    const addTodosList = () => {
        setTodosList([...todosList, payload]);
        setText("");
    }
    
    return <div className="body">
          <TodoList todosList={todosList} />
        <input className="inp" value={text} onChange={handleChange} type="text" placeholder="Write Something" />
        <button className="btn" onClick={addTodosList}>+</button>
      
    </div>
 };

export { Todos };