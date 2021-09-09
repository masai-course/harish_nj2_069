import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TodosItems } from './Todositem';

//const Todos = () =>
function Todos()
{
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        // console.log("Input box changed", e.target.value);
        setText(e.target.value);
        // console.log(uuid());
    };

    const handleAddTodo = () => {
        const payload = { status: false, title: text, id: uuid() };
        setTodoList([...todoList, payload]);
        //  setTodoList([...todoList, text]);
        //setText("");
    }
    return <div>
        <h2>Todo List</h2>
        <input onChange={handleChange} type="text" placeholder="Add todo" />
        <button onClick={handleAddTodo}>Add</button>
        {todoList.map((e) => (
            <TodosItems key={e.id} todo={e}/>
            // <div>{e}</div>
        ))}
    </div>
}

export { Todos }; 