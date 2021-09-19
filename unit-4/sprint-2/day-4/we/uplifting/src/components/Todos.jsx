import { useState } from "react";
import  Todosinput  from "./Todosinput";
import Todoslist from "./Todoslist";

function Todos() {
  const [todoslist, setTodoslist] = useState([]);
  const handlePushToList = (data) => {
    setTodoslist([...todoslist, data]);
  };
  const toggleTodo = (id) => {
    console.log(id);
    const updatedList = todoslist.map(element =>
      element.id === id
        ? { ...element, status: !element.status }
        : element
    );
    setTodoslist(updatedList);
    console.log(updatedList);
  };
    return (
    <>
        <Todosinput handleAdd={handlePushToList} />
        <Todoslist toggleTodo={toggleTodo} list= {todoslist} />
        </>
    ) 
}

export default Todos