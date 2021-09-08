import "./categories.css";
export function Category({ title, imageUrl })
{
    return <div style={{
        display: "flex",
       
    }}
        className="color"
    >
        <img src={imageUrl} />
        <h4>{title}</h4>
    </div> 
}