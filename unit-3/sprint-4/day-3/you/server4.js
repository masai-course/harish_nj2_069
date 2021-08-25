const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/Library", {
     useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
}
//////////Author schema///////////////

const authorSchema = new mongoose.Schema({
    author_firstname: {type: String, required: true},
    author_lastname: { type: String, required: true },
  },
    {
    versionKey: false
})

const Author = mongoose.model("author", authorSchema)

//////////////////Section Schema///////////////////////

const sectionSchema = new mongoose.Schema({
    section_name: { type: String, required: true }
}, {
    versionKey: false
});

const Section = mongoose.model("section", sectionSchema);

/////////////////////Book Schema/////////////////////


const bookSchema = new mongoose.Schema({
    book_name: { type: String, required: true },
    book_body: { type: String, required: true },
    CheckOut : { type: Boolean, require: true },
    sectionId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    },
    authorId:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true
        },
    ],
},
    {
        versionKey: false,
        timestamps: true
})

const Book = mongoose.model("book", bookSchema)

////////////////////User Schema/////////////////////////////

const userSchema = new mongoose.Schema({
    user: {type:String, required:true}
}, {
    versionKey: false
});

const User = mongoose.model("user", userSchema);


/////////user start////////////
app.get("/use", async function (request, respond) {
    try
    {
        const user = await User.find().lean().exec();
        return respond.status(201).send(user);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})

app.post("/use", async function (request, respond) {
    try {
        const user = await User.create(request.body)
        return respond.status(201).send(user);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});

/////////////////////User end/////////////////////

/////////////////////Author start/////////////////////

app.get("/author", async function (request, respond) {
    try
    {
        const auth = await Author.find().lean().exec();
        return respond.status(201).send(auth);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})

app.post("/author", async function (request, respond) {
    try {
        const auth = await Author.create(request.body)
        return respond.status(201).send(auth);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});

/////////////////////Author end/////////////////////

/////////////////////Section starts /////////////////

app.get("/section", async function (request, respond) {
    try
    {
        const sect = await Section.find().lean().exec();
        return respond.status(201).send(sect);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})

app.post("/section", async function (request, respond) {
    try {
        const sect = await Section.create(request.body)
        return respond.status(201).send(sect);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});

/////////////////////Section ends////////////////////////

/////////////////////Book starts /////////////////

app.get("/book", async function (request, respond) {
    try
    {
        const bookk = await Book.find().lean().exec();
        return respond.status(201).send(bookk);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})

app.post("/book", async function (request, respond) {
    try {
        const bookk = await Book.create(request.body)
        return respond.status(201).send(bookk);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});

/////////////////////Book ends////////////////////////

/////// finding books in section/////////////////////

app.get("/section/:id/book", async function (request, respond)
{
    const booksec = await Book.find({ sectionId: request.params.id }).lean().exec()
    const sec = await Section.findById(request.params.id);
    return respond.status(201).json({Books : booksec, Section : sec});
})

//////// finding books with authors Id///////////////

app.get("/author/:id/book", async function (request, respond)
{
    const bookaut = await Book.find({ authorId: request.params.id }).lean().exec()
    const aut = await Author.findById(request.params.id);
    return respond.status(201).json({Books : bookaut, Author : aut});
})


//////Patch for Checkout//////////////

app.patch("/book/:id", async function(request, respond){
    const data = await Book.findByIdAndUpdate(request.params.id, request.body, { new: true }).lean()
    return respond.send(data);
});

///Books checkout/////////////

app.get("/book/checkout", async function(req, res){
    const data = await Book.find({"CheckOut":{$eq: true}}).lean()
    return res.send(data);
});

///Books Not Checkout//////////

app.get("/book/ncheckout", async function(req, res){
    const data = await Book.find({"CheckOut":{$eq: false}}).lean()
    return res.send(data);
});

////////////////////////////////////////////////////////////////////////
app.listen(5858, async () => {
    await connect();
    console.log("listening to the port 5858")
})

