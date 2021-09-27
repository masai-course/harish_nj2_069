import { Link } from "react-router-dom";

function Navbar()
{
    const Routes = [
        { to: "/", text: "Home" },
        { to: "/Book", text: "Books" },
    ]

    return (
        <div style={{
            display: "flex",
            justifyContent:"center",
            gap: "10%",
            fontSize:"18px",
        }}>
            {Routes.map((e) => (
                <Link to={e.to}>{e.text}</Link>
            ))}
       </div>
    )
}

export default Navbar;