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
    price: { type: Number, require: true },
    colorId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "color",
        require: true,
    }],
    genderId: [{
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

const genderSchema = new mongoose.Schema({
    gender :{type:String, require:true}
}, {
    versionKey:false
})

const Gender = mongoose.model("gender", genderSchema) 

///////////////////////// Products Crud ////////////////////////////////

app.post("/prod", async (request, respond) => {
    try {
        const pro = await Product.create(request.body);
        return respond.status(201).send(pro);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});

app.get("/prod", async (request, respond) => {
    try {
        const pro = await Product.find().lean().exec();
        return respond.status(201).send(pro);
    }
     catch (err) {
        return respond.status(400).send(err.message);
    }
})
 
////////////////////////////////////////////////////////

///////////////////////Colors Crud/////////////////////////

app.post("/col", async (request, respond) => {
    try {
        const colr = await Color.create(request.body);
        return respond.status(201).send(colr);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});

app.get("/col", async (request, respond) => {
    try {
        const colr  = await Color.find().lean().exec();
        return respond.status(201).send(colr);
    }
     catch (err) {
        return respond.status(400).send(err.message);
    }
})

//////////////////////////////////////////////////////

//////////////////////Gender Cruds/////////////////////

app.post("/gen", async (request, respond) => {
    try {
        const gend = await Gender.create(request.body);
        return respond.status(201).send(gend);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});

app.get("/gen", async (request, respond) => {
    try {
        const gend = await Gender.find().lean().exec();
        return respond.status(201).send(gend);
    }
     catch (err) {
        return respond.status(400).send(err.message);
    }
})

////////////////////////////////////////////////////

app.listen(5858, async () => {
    await connect();
    console.log("listening on port 5858")
})