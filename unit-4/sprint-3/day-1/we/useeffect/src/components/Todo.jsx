import { useEffect, useState } from "react";

export function Todo()
{
    const [text, setText] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        getTodos()
    }, [page]);


    function getTodos() {
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
        // fetch("http://localhost:3001/todos")
            .then((data) => data.json())
            .then((data) => {
                console.log("Todos", data);
                setTodolist(data);
                setLoading(false);
            },);
    };
    console.log("todolist", todolist);
    return loading ? (
        "Loading..."
    ) : (
        <>
            <input placeholder="Add todo" value={text} onChange={(e) => {
                setText(e.target.value);
            }} type="text" />
            <button onClick={() => {
                const data = {
                    title: text,
                    status: false
                };
                // setTodolist([...todolist, data]);
                fetch("http://localhost:3001/todos", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(() => {
                    getTodos();
                    setText("");
                })
            }}>Add todo</button>
                {"current page"}
                {page}
            {todolist.map((e) =>
                <div key={e.id} >
                    {e.title}
                </div>
            )}
            <button onClick={() => { setPage(page - 1) }}>Prev Page</button>
            <button onClick={() => { setPage(page + 1) }}>Next Page</button>
        </>
    );
}