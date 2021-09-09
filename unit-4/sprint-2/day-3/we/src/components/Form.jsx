import { useState } from "react"

const initState = {
    username: "",
    age: "",
    email:""
};

function Form()
{
    const [formData, setFormData] = useState(initState);
   // console.log(formData);

    const handleChange = (e) =>
    {
        console.log(e.target.name);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(formData);
        }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="username" placeholder="Enter your name" />
                <input onChange={handleChange} type="number" name="age" placeholder="Enter your age" />
                <input onChange={handleChange} type="email" name="email" placeholder="Enter your email" />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}
 
export {Form}