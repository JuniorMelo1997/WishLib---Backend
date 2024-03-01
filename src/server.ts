import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.json({message: "We are working"});
})

app.listen(3000, ()=>{
    console.log("Running");
});