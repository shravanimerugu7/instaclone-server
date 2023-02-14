const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
const Route = require("./routes") 

mongoose.set('strictQuery', true);
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shravaniM:shravani@instaclone.ybjtquv.mongodb.net/?retryWrites=true&w=majority",()=>
{
    console.log("mongoose is connected");
})

app.use("/", Route)
app.listen(8080,()=>{
    console.log("server is running");
})
