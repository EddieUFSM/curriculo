const express = require('express');
const dotenv = require('dotenv')
const app = express();
var ProgressBar = require('progressbar.js');

require('dotenv').config()

/** engine to config for dynamic pages */
app.set("view engine", "ejs");

/** configuring web page css and js files */
app.use('/font', express.static(__dirname + '/public/font'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/vendors', express.static(__dirname + '/public/vendors'));



app.get('/', function(req, res) {
    
    res.status(200).render('curriculo')
});

app.get('/home', function(req,res){
    res.status(200).render('workonit')
})

app.get('/contato', function(req,res){
    res.status(200).render('workonit')
})

app.get('/formacao', function(req,res){
    res.status(200).render('formacao')
})

app.get('/experiencias', function(req,res){
    res.status(200).render('experiencia')
})

app.get('/index', function(req,res){
    res.status(200).render('workonit')
})

app.get('/*', function(req, res) {
    res.status(400).render('error')
});
  
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})