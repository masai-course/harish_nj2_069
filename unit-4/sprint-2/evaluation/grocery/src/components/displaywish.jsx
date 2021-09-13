
export default function Displaywish({ grocw }) {
    const { title, status } = grocw;

    return <div
    
        style={{
            border: "1px solid black",
            width: "20%",
            marginleft: "auto",
        marginTop: "10px"}}>{title}</div>
}
    // let arr = groc.map((e) =>
    // {
    //     return e.title;
    // })
   // console.log(groc);

    // groc.foreach((e) => {
    //     arr.push({ e.title });
    // return
    // <div>
    //     <button>show things</button>
    //     {arr.map((e) =>
    //         {e.title}
    //     )}
    // </div>
// }
