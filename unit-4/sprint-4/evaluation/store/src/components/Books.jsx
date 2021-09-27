import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./books.css";


function Books()
{
    const [books, setBook] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:3001/books?_page=${page}&_limit=10`)
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            setBook(data);
        });
    }, [page])

    console.log(books);

    return (
        <div>
            <ul>
                {"Page-no:"}
                {page}
                 <button onClick={() => setPage(page - 1)}>Prev Page</button>
                <button onClick={() => setPage(page + 1)}>Next Page</button>
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