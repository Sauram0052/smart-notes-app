const express = require("express");
const { NetworkResources } = require("node:inspector");

const app = express();

let notes = [
    {
        id:1,
        title:"Learn Node"
    },
    {
        id:2,
        title:"Learn Express"
    }
];

app.get("/",(req,res)=>{
    res.send("Backend running");
});

app.get("/notes",(req,res)=>{
    res.send(notes);
});

app.listen(3000,()=>{
    console.log("Server Started");
});