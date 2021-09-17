import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList ({todosList}) {
    return (
    <>
     {todosList.map((e) => (
           <TodoItem e={e} />
     ))
            }
            </>
    )
}