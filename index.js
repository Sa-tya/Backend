const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('get method')
})

app.post('/',(req,res)=>{
    res.send('post method')
})

app.put('/',(req,res)=>{
    res.send('put method')
})

app.patch('/',(req,res)=>{
    res.send('patch method')
})

app.delete('/',(req,res)=>{
    console.log(req)
    res.send('delete method')
})

app.head('/',(req,res)=>{
    console.log(req)
    res.send('head method')
})
app.listen(5000,()=> console.log('server started'));