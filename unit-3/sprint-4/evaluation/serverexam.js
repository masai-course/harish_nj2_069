const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/Olympic", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}


app.listen(5858, async () => {
    await connect();
    console.log("listening on port 5858")
})