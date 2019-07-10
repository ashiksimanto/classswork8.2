var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser =require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//var fs= require('fs');
//var server = http.createServer(function(req, res){
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //fs.readFile('index.html', function(err,data){
    //if(err){
      //return console.log("File Read error")
    //}
    //console.log(data)
    //res.end(data);
  //})
  //res.end("Hello World\n");
//});

app.get('/' , function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.get('/form' , function(req,res){
  res.sendFile(__dirname+'/form.html')
})



app.get('/about' , function(req,res){
  res.sendFile(__dirname+'/second.html')
})

app.get('/about/second' , function(req,res){
  res.sendFile(__dirname+'/second.html')
})
app.post('/article/new' , function(req,res){
  console.log(req.body)
  res.send({message:"data received"})
})

server.listen(3000, 'localhost', function(){
  console.log('Server running');
});
