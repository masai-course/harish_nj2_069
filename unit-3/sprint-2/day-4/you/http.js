const express = require("express");
//console.log(express);
const app = express();
let data = require("./users.json");
//console.log(data);
//app.use(express.json());
app.get("/", function (request, response) {
    return response.send("Welcome to Home Page");
})

app.get("/users", function (request, response) {
       return response.send(data);
})

app.post("/users/", function (request, response)
{
    data.push({
        "id": 1001,
        "first_name": "Test First Name",
        "last_name": "Test Last Name",
        "email": "ydalesco0@test.com",
        "gender": "Genderfluid",
        "ip_address": "164.215.194.36",
        "age": 65
    });
   // console.log(data);
    return response.send(data)
})

app.patch("/users/:id", function (request, response)
{
    let input = request.params.id;
   // console.log(input);
    for (let i = 0; i < data.length; i++)
    {
        if (input == data[i].id)
        {
            data[i].email = "Updated first name"
            }
    }
    return response.send(data);
})

app.delete("/users/:id", function (request, response)
{
    let input1 = request.params.id;
    for (let i = 0; i < data.length; i++)
    {
        if (input1 == data[i].id)
        {
            delete data[i];
        }
    }
    return response.send(data);
})

app.listen(2344, () => {
    console.log("listening on port 2344");
}) 