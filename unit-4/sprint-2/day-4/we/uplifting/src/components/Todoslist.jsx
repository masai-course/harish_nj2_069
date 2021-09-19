import "./text.css";
function Todoslist({ list, toggleTodo })
{
    return list.map((e) =>
        <div
    style={{
    textDecoration: e.status ? "line-through" : "none",
    border: "1px solid black",
    width: "50%",
    margin: "0 auto",
    marginTop: "10px",
    borderRadius: "6px",
    padding: "10px",
        }}
            key={e.id} > {e.title} - {e.status ? "Done" : "None"}
            <button onClick={() => {
              toggleTodo(e.id);
            }}>Toggle</button>
        </div >
    ); 
}
export default Todoslist