const express = require("express");

const app = express();

app.get("/sum" , function(res ,req){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b ; 
    res.setEncoding(sum.toString());
});


app.get("/interest" , (res , req)=>{
    const principal = parseInt(req.query.principal);
    const rate      = parseInt(req.query.rate);
    const time      = parseInt(req.query.time);
    const interest  = parseInt(req.query.interest);
    const total     = principal + interest;

    res.setEncoding({
        total : total,
        interest: interest,
    })
});


app.listen(8080)
