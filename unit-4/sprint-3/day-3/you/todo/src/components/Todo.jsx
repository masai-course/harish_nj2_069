import axios from "axios";
import { useEffect, useState } from "react";
import Todolist from "./Todolist";

export default function Todo()
{
    const [text, setText] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    console.log(todolist);

    useEffect(() => {
        getTodos()
    }, [page]);

    function getTodos()
    {
        fetch(`http://localhost:3004/todo?_page=${page}&_limit=2`)
            .then((data) => data.json())
            .then((data) => {
                setTodolist(data);
                setLoading(false);
        })
    }

    return loading ? (
        "Loading... "
    ) : (
            <>
                 <h1>TODO POST</h1>
            <input type="text" value={text} placeholder="Add todo" onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={() => {
                const data = { name: text, status: false }; 
                axios.post("http://localhost:3004/todo", data)
                    .then(() => {
                    getTodos();
                    setText("");
                }).catch((err) => {
                    console.log("err", err)
                        });
                }}

                >Add todo</button>
                <h3>{"Page No:"} {page}</h3>
                
                <Todolist list={todolist} />
                  <button onClick={() => { setPage(page - 1) }}>Prev Page</button>
            <button onClick={() => { setPage(page + 1) }}>Next Page</button>
        </>
    )
}