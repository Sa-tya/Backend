const express = require('express');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.use('/',(req,res)=>{
    // console.log('file sended...',__dirname)
    // res.sendFile(path.join(__dirname,'Demo.txt'),'Hello.txt')
    // res.download(path.join(__dirname,'Demo.txt'),'Hello.txt')
    // res.render('index',{title:'Static file'})
    res.status(201)
    .cookie('hello','hello1',{
        expires : new Date(Date.now() + 60000)
    })
    .cookie('refer','refered')
    .redirect(301,'https://google.com')
})

// app.get('/',(req,res)=>{
//     res.send('Hello...')
// })

app.listen(3333);