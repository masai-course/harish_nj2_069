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

///////////Product Schema//////////////////

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    gender: [{ type: String, require: true }],
    price: { type: Number, require: true },
    colorId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "color",
        require: true,
    }]
}, {
    versionKey:false
})

const Product = mongoose.model("product", productSchema)

//////////Color Schema///////////////////

const colorSchema = new mongoose.Schema({
    colorname:{type:String, require:true}
}, {
    versionKey:false
})

const Color = mongoose.model("color", colorSchema)

//////////////////////////////////////////////////////


app.post("/prod", async (request, respond) => {
    try {
        const pro = await Product.create(request.body);
        return respond.status(201).send(pro);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});
  

app.listen(5858, async () => {
    await connect();
    console.log("listening on port 5858")
})