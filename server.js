const express = require("express");

const app = express();

app.get("/sum" , function(res ,req){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b ; 
    res.setEncoding(sum.toString());
});

app.listen(4000)