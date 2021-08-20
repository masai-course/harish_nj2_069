const express = require("express")
//console.log(express);
const app = express()
//console.log(app); 

   
//Rest API
//HTTP VERBS
//get => whenver you want to get some data from the server
//post => whenver you want to create some data on the server
//patch => whenver you want to update some data on the server
//delete => whenver you want to delete some data on the server


app.get("/users", function (request, response) {
    return response.send({data : {name: "Harish", teacher: "Dhaval"}});
})

app.post("/users", function (request, response) {
    return response.send("Testing Post");
})

app.patch("/users/", function (request, response) {
    return response.send("Testing Patch");
})

app.delete("/users/:id", function (request, response) {
    return response.send("Testing Delete");
})

app.listen(2345, () => {
    console.log("listening on port 2345");
})