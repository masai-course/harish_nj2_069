import { useState } from "react"
import { v4 as uuid } from "uuid"
import DisplayItems from "./DisplayItems";
export default function TopSection()
{
    const [text, setText] = useState("");
    const [finalglist, setfinalglist] = useState([]);
    const [wishglist, setwishglist] = useState([]);
    
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const finallist = () => {
        const payload = {status: true, title: text,id:uuid()};
        setfinalglist([...finalglist, payload]);
    }
     console.log(finalglist);

     const wishlist = () => {
        const payload = {status: true, title: text, id:uuid()};
        setwishglist([...wishglist, payload]);
    }
    console.log(wishglist);

    return (
        <div>
            <h1>Add Groceries</h1>
            <input onChange={handleChange} type="text" placeholder="enter groceries" />
            <button onClick={finallist}>Add to Final list</button>
            <button onClick={wishlist}>Add to Wish list</button>
            {finalglist.map((e) => (
             <DisplayItems key={e.id} groc={e}/>
            ))}
            </div>
    )
}
