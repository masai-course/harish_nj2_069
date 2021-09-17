import React from "react";

export default function TodoItem ({e}) {
    return (
        <div className="item">{e.title}</div>
    )
}