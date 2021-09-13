import { useState } from "react"
import { v4 as uuid } from "uuid"
import DisplayItems from "./DisplayItems";
import Displaywish from "./displaywish";
export default function TopSection({ handleAdd })
{
    const [text, setText] = useState("");
    const [finalglist, setfinalglist] = useState([]);
    const [wishglist, setwishglist] = useState([]);
    
    const handleChange = (e) => {
         setText(e.target.value);
       // console.log(e.target.value);
    }
    const finallist = () => {
        const payload = {status: true, title: text, id:uuid()};
        setfinalglist([...finalglist, payload]);
       // handleAdd(data);
        //setText("");
    }
     console.log(finalglist);

     const wishlist = () => {
        const payload = {status: true, title: text, id:uuid()};
        setwishglist([...wishglist, payload]);
    }
    console.log(wishglist);
    // function showfinal()
    //         {
    //                 // finalglist.map((e) => (
    //    // console.log({finalglist})
    //     <DisplayItems groc={finalglist} />
    //     console.log("in showfinal");
    //         }

    return (
        <div>
            <h1>Add Groceries</h1>
            <input onChange={handleChange} type="text" placeholder="enter groceries" />
            <button onClick={finallist}>Add to Final list</button>
            <button onClick={wishlist}>Add to Wish list</button>
            {/* <button onClick={showfinal}>Show final List</button> */}
            {finalglist.map((e) => (
                <DisplayItems key={e.id} groc={e} />
            ))}
            {wishglist.map((e) =>
                <Displaywish key={e.id} grocw={e}/>
            )}
            {/* <DisplayItems groc={finalglist}/> */}
        </div>
    )
}
