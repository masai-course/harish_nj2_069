import axios from "axios";
import { useEffect, useState } from "react";
import "./res.css";

export default function Restaurant()
{
    const [text, setText] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [formData,setFormData]=useState({})
    //console.log(todolist);
    useEffect(() => {
        getRestaurant();
    }, [])
   console.log("todolist", todolist);

    const handleChange = (e)  => {
        console.log(e.target, "e.target");
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
       // let obj = {"name":"harish"}
      // console.log(formData)
        //setText(e.target.value);
    }
    console.log("formcheck", formData);
    
      function sortin()
    {
        let results = todolist.sort((a,b) => (b.rating-a.rating)).map(el => el)
        setTodolist(results);
          console.log("sorted", results);
    }

    function oneStar()
    {
        let result = todolist.filter((e) => e.rating > 1)
        setTodolist(result);
        console.log(result);
    }

      function twoStar()
    {
        let result = todolist.filter((e) => e.rating > 2)
        setTodolist(result);
        console.log(result);
    }

      function threeStar()
    {
        let result = todolist.filter((e) => e.rating > 3)
        setTodolist(result);
        console.log(result);
    }

      function fourStar()
    {
        let result = todolist.filter((e) => e.rating > 4)
        setTodolist(result);
        console.log(result);
    }

     function lh()
    {
        let results = todolist.sort((a,b) => ((2*a.oneprice)-(2*b.oneprice))).map(el => el)
        setTodolist(results);
          console.log("sorted", results);
    }

     function hl()
    {
        let results = todolist.sort((a,b) => ((2*b.oneprice)-(2*a.oneprice))).map(el => el)
        setTodolist(results);
          console.log("sorted", results);
    }
    
    function getRestaurant()
    {
        fetch("http://localhost:3004/Restaurant")
            .then((data) => data.json())
            .then((data) => {
                setTodolist(data);
                console.log(data);
                
            })
        
    }

// let tpayments=[]
//   let paymentsfilter=()=>{
//      for(let key in payments){
//        if(payments[key]===true){
//          tpayments.push(key)
//        }
//      }
//   }
//   paymentsfilter()



    return <>
        <form onSubmit={(e) => {
            e.preventDefault();
            const data = formData;
            // console.log(JSON.stringify(data),"data stirngified")
            // fetch("http://localhost:3003/Restaurant", {
            //     method: "POST",
            //     body: JSON.stringify(data),
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // })
                axios.post("http://localhost:3004/Restaurant",data)
                .then(() => {
                getRestaurant();
            }).catch((err) => {
                console.log("err",err)
            });
          //  setTodolist([...todolist, formData]);
        }}>
            {/* <h1 className="Masai">Masai</h1> */}
        <label>Name:</label>
        <input type="text" name="name" placeholder="Add name" onChange={handleChange} />
        
        <label>Image: </label>
        <input type="text"  name="image" placeholder="Add Hotel" onChange={handleChange} />
            
        <label>Specials: </label>
        <input type="text" name="specials" placeholder="Add Hotel" onChange={handleChange} />
            
        <label>Price per Person: </label>
        <input type="text" name="oneprice" placeholder="Add Hotel" onChange={handleChange} />
            
        <label>Minimum Price: </label>
        <input type="text" name="mprice" placeholder="Add Hotel" onChange={handleChange} />
            
        <label>Delivery Time: </label>
        <input type="text" name="time" placeholder="Add Hotel" onChange={handleChange} />
            
        <label>Ratings: </label>
        <input type="text" name="rating" placeholder="Add Hotel" onChange={handleChange} />
            
        <label>Votes: </label>
        <input type="text" name="votes" placeholder="Add Hotel" onChange={handleChange} />
            
        <label>Reviews: </label>
        <input type="text" name="treviews" placeholder="Add Hotel" onChange={handleChange}/>
        <input type="submit" value="submit"/>
        </form>
        <h2>Sort By Ratings</h2>
        <button onClick={sortin}>Sort by Ratings</button>
        <button onClick={oneStar}>1 star</button>
        <button onClick={twoStar}>2 star</button>
        <button onClick={threeStar}>3 star</button>
        <button onClick={fourStar}>4 star</button>
        <h2>Sort By Pricing per two Heads</h2>
        <button onClick={lh}>low to high</button>
        <button onClick={hl}>high to low</button>
        <h2>Restaurant Payments</h2>
        <button>Cash</button>
        <button>Card</button>
        <button>All</button>

        <div className="main">
        {todolist.map(e =>
            <div className="parent" key={e.id}>
                <img className="image" src={e.image} alt="jjdnj" />

                <div className="fchild">
               <div className="name" >{e.name}</div>
                <div className="special"> {e.specials} </div>
                    <div className="oneprice"> Cost ₹{e.oneprice} for one </div>
                     <div className="mprice"> Min ₹{e.mprice} . Upto {e.time}mins </div>
                    </div>
                
                <div className="schild">
                <div className="rating"> {e.rating}</div>
                <div className="votes"> {e.votes} votes </div>
                <div className="reviews"> {e.treviews} reviews</div>
                </div>

                <div className="border1">
                    <button className="bton" >Order Online</button> 
                </div>
             </div>   
            )}
        </div>
    </>
}