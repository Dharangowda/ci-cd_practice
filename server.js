import express from "express";
import sum from "./sum.js"
const app = new express();

app.listen(7070,()=>{
    console.log("app is running on port 7070");
})

app.get("/home",async(req,res)=>{
res.json({
    msg:"this is home page "
})
})

app.get("/getsum/:a/:b", async(req,res)=>{
    const {a,b} = req.params;
    res.json({
        result:sum(parseInt(a),parseInt(b))
    })
})
