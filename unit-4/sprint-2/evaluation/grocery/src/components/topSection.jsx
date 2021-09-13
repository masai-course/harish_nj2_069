import { useState } from "react"
import { v4 as uuid } from "uuid"
export default function TopSection()
{
    const [text, setText] = useState("");
    const [grocerylist, setgrocerylist] = useState([]);
    
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const finallist = () => {
        const payload = { title: text };
        setgrocerylist([...grocerylist, payload]);
    }
     console.log(grocerylist);

     const wishlist = () => {
        const payload = {status: document, title: text, id:uuid()};
        setgrocerylist([...grocerylist, payload]);
    }

    return (
        <div>
            <h1>Add Groceries</h1>
            <input onChange={handleChange} type="text" placeholder="enter groceries" />
            <button onClick={finallist}>Add to Final list</button>
            <button onClick={wishlist}>Add to Wish list</button>
            </div>
    )
}
