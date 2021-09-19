import { useState } from "react"
import { nanoid } from "nanoid";
function Todosinput({ handleAdd })
{
    const [text, setText] = useState("");
    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
        console.log(e.target.value);
    };
    const handleAddTodo = () => {
        const data = { status: false, title: text, id: nanoid(4) };
        handleAdd(data);
        setText("");
    }
    return (
        <>
            <input value={text} onChange={handleChange} type="text" placeholder="Add todo" />
            <button onClick={handleAddTodo}>Add</button>
        </>
  )
}

export default Todosinput;