export default function Todolist({ list, toggleTodo, deleteTodo })
{

    return (
        <>
             {list.map((e) => 
                <div key={e.id}>
                    {e.name}- {e.status ? "Done" : "None"}
                    <button onClick={() => {
                        toggleTodo(e.id);
                     }}>Toggle</button>
                     <button onClick={() => {
                         deleteTodo(e.id);
                     }}>Delete</button>
                </div>
            )}
            </>
  )
}