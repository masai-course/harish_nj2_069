import "./menu.css";
export function Onemenu({ bname, bcolor })
{
    return <div>
        <button className={bcolor}>{bname}</button>
    </div>
    
}