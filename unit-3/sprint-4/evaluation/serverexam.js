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
        ref: "gender",
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


/////////////////Products greater than 500///////////////////////////

app.get("/prodhigh", async (request, respond) => {
    try {
        const prohigh = await Product.find({ "price": { $gt: 500 } }).lean().exec();
        return respond.status(201).send(prohigh);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})

//////////////////////////////////////////////////////////////////////

//////////////////////////products by men and women/////////////////////////

app.get("/prodmw", async (request, respond) => {
    try {
        const promw = await Product.find({ $and: [{ "genderId": { $eq: "61236f612f164903c4cdbafa" } }, {"genderId" : {$eq: "61236f662f164903c4cdbafb"}}] }).lean().exec();
        return respond.status(201).send(promw);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})


///////////////////products more than 3 different colors///////////////

app.get("/prodcolormorethanthree", async (request, respond) => {
    try {
        const match = await Product.find().lean().exec();
        let array = [];
        for (let i = 0; i < match.length; i++) {
            if (match[i].colorId.length > 3) {
                array.push(match[i]);
            }
        }
        return respond.status(201).send(array);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
})

///////////////////////////////////////////////////////////////////

///////////// match 1 colour///////////////////////////////////

app.get("/prod/:color", async (request, respond) => {
    try {
        const match = await Product.find().lean().exec();
        let array = [];
        for (let i = 0; i < match.length; i++)
        {
            for (let j = 0; j < match[i].colorId.length; j++)
            {
                if (match[i].colorId[j].colorname == request.params.color)
                {
                    array.push(match[i]);
                    }
                }
            }
        return respond.status(201).send(array);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})

//////////////////////////////////////////////////////////////////////


///////////////product with most colors////////////////////////////

app.get("/prodcolormost", async (request, respond) => {
    try {
        const match = await Product.find().lean().exec();
        let array = [];
        let l = 0;
        for (let i = 0; i < match.length; i++)
        {
            if (match[i].colorId.length > l)
            {
                l = match[i].colorId.length;
                array.push(match[i]);
            }
        }
        return respond.status(201).send(array);
    }
     catch (err) {
        return respond.status(400).send(err.message);
    }
})

//////////////////////////////////////////////////////

/////////////////////total number of produts on site///////////////////


app.get("/prodtotal", async (request, respond) => {
   try {
        const match = await Product.find().populate("genderId").populate("colorId").lean().exec();
        let t = 0;
        for (let i = 0; i < match.length; i++) {
            t += (match[i].colorId.length);
            //pr = 1;
           // console.log(t);
       }
       t = String(t);
        return respond.send(t);
   }
    catch (err) {
        return respond.status(400).send(err.message);
    }
})

            

app.listen(5858, async () => {
    await connect();
    console.log("listening on port 5858")
})