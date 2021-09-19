import { useRef } from "react";
import { useState } from "react/cjs/react.development"

export default function Forms()
{
    const initValue = {
        username: "",
        age: "",
        isMarried: false,
    }
    const [formdata, setFormdata] = useState(initValue);
    const uploadRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(e.target.files);
        setFormdata({ ...formdata, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(formdata);
    });
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" placeholder="Username" />
            <br />
            <input onChange={handleChange} type="text" name="age" placeholder="Age" />
            <br />
            Are you married ? : {" "}
            <input onChange={handleChange} type="checkbox" name="isMarried" />
            <br />
            <select onChange={handleChange} name="country">
                <option value="india">India</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
            </select>
            <br />
            <input onChange={handleChange} ref={uploadRef} type="file" name="pancard" />
            <br/>
            <input type="submit" value="Submit" />  
        </form>
    )
}