
const express = require("express");

const mongoose = require("mongoose");

//const moviedb = require("./movies_data1.json")

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/masaimovies", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    
}  

const movieSchema = new mongoose.Schema({
    id: Number,
    movie_name: String,
    movie_genre: String,
    production_year: Number,
    budget: Number
}, {
    version: false
});


const movieModel = mongoose.model("mockmovie", movieSchema)

app.get("/movie", async function (request, respond) {
    const result = await movieModel.find().lean().exec();
    return respond.send(result);
})

app.post("/movie", async function (request, respond) {
    const result = await movieModel.create(request.body);
    return respond.send(result);
})

app.get("/movie/:id", async function (request, respond) {
    const result = await movieModel.findById(request.params.id).lean().exec();
    return respond.send(result);
})

app.patch("/movie/:id", async function (request, respond) {
    const result = await movieModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
    return respond.send(result);
})

app.delete("/movie/:id", async function (request, respond) {
    const result = await movieModel.findByIdAndDelete(request.params.id);
    return respond.send(result);
})


app.listen(2333, async () => {
    await connect();
    console.log("listening to port 2333");
})
