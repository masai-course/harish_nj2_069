import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import  axios  from "axios";

function Books()
{
    const [books, setBook] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:3001/books").then((res) => {
            console.log(res.data);
            setBook(res.data.data);
        });
    }, [])

    return (
        <div>
            <ul>
                {books.map((e) => (
                    <li
                        key={e.id}>
                        <Link to = {`/Book/${e.id}`}>
                            {e.Title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books;