import { useState } from 'react';
const Todos = () =>
{
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        console.log("Input box changed", e.target.value);
        setText(e.target.value);
    };

    const addTodoList = () => {
        const payload = { status: false, title: text };
        setTodoList([...todoList, payload]);
        setText("");
    }
    return <div>
        <h2>Todo List</h2>
        <input onChange={handleChange} type="text" placeholder="Add todo" />
        <button onClick={addTodoList}>Add</button>
        {todoList.map((e) => (
            <div>{e.title} : {`${e.status ? "Done" : "Not Done" }`}</div>
        ))}
    </div>
}

export { Todos }; 