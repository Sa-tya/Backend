const express = require('express')

const app = express();

const slash = (req,res)=>{
    res.json(`thank you post`)
};

app.get('/use/:a/bcd/:e',(req,res)=>{
    res.status(200).send(req.params)
});

app.post('/',slash);

app.listen(5000)//,()=> console.log('server started'));