var express = require('express');
var app = express();
var PORT = 3001;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a50334cad09f40e8bbcdc943703c4812');
var data =[];

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

newsapi.v2.topHeadlines({
  //category: 'technology',
  language: 'es',
 
  
}).then(response =>{
  data=[response];
  
});

// With middleware
app.use('/', function(req,data, res, next){
    res.json(data);
    next();
})
 
app.get('/', function(req, res){
     console.log("User Page")
     res.json(data);
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
