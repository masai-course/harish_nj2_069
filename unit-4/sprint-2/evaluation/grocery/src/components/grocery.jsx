import TopSection from "./topSection";
import { useState } from "react";
import DisplayItems from "./DisplayItems";
export default function Grocery()
{
    const [groclist, setgroclist] = useState([]);
    const handlePush = (data) => {
        setgroclist([...groclist, data])
    };
    return (
        <div>
            <TopSection handleAdd={handlePush} />
            <DisplayItems groc={groclist}/>
        </div>
    )
}