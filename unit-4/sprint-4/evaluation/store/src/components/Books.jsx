import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./books.css";


function Books()
{
    const [books, setBook] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/books").then((data) => data.json())
        .then((data) => {
            console.log(data);
            setBook(data);
        });
    }, [])
    console.log(books);

    return (
        <div>
            <ul>
                <div className="main" >
                {books.map((e) => (
                        <Link to={`/Book/${e.id}`}>
                        <div className="parent" key={e.id}>
                            <img className="image" src={e.image} />
                            
                            <div className="fchild">
                                <div className="Name"> Title: {e.Title}</div>
                                <div className="desc">Descirption: {e.description}</div>
                              <div className="rating">  Rating: {e.rating}</div>
                             <div className="author">Author:{e.author}</div>
                           </div>
                            </div>
                        </Link>
                ))}
                </div>
            </ul>
        </div>
    )
}

export default Books;