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
        fetch(`http://localhost:3003/todo?_page=${page}&_limit=2`)
            .then((data) => data.json())
            .then((data) => {
                setTodolist(data);
                setLoading(false);
        })
    }

     function toggleTodo(id)
    {
        const updatedList = todolist.map(element =>
            element.id === id
                ? { ...element, status: !element.status }
                : element
        );
        setTodolist(updatedList);
    }

    function deleteTodo(id)
    {
        axios.delete(`http://localhost:3003/todo/${id}`)
        .then(() => {
                    getTodos();
                    setText("");
                }).catch((err) => {
                    console.log("err", err)
                        });
                }

    return loading ? (
        "Loading... "
    ) : (
        <>
            <input type="text" value={text} placeholder="Add todo" onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={() => {
                const data = { name: text, status: false }; 
                // setTodolist([...todolist, data]);
                // fetch("http://localhost:3003/todo", {
                //     method: "POST",
                //     body: JSON.stringify(data),
                //     headers: {
                //         "Content-Type" : "application/json",
                //     },
                // })
                axios.post("http://localhost:3003/todo", data)
                    .then(() => {
                    getTodos();
                    setText("");
                }).catch((err) => {
                    console.log("err", err)
                        });
                }}

                >Add todo</button>
                {"current page"}
                {page}
            {/* {todolist.map((e) => 
                <div key={e.id}>
                    {e.name}- {e.status ? "Done" : "None"}
                    <button onClick={() => {
                        toggleTodo(e.id);
                    }}>Toggle</button>
                </div>
            )} */}
                <Todolist deleteTodo={deleteTodo} toggleTodo={toggleTodo} list={todolist} />
                  <button onClick={() => { setPage(page - 1) }}>Prev Page</button>
            <button onClick={() => { setPage(page + 1) }}>Next Page</button>
        </>
    )
}