const express = require("express");
const routes = express.Router();
const path = require('path');

routes.use(express.static( __dirname + '/imgs'));
routes.use(express.static( __dirname + '/css'));

routes.get('/', (req, res)=>{
    return res.sendFile(path.join(__dirname + '/html/index.html'));
    
});

routes.get('/sobre', (req, res)=>{
    console.log(req.url);
   return res.sendFile(path.join(__dirname + '/html/sobre.html'));
    
});

routes.get('/pagina2', (req, res)=>{
    return res.sendFile(path.join(__dirname + '/html/pagina2.html'));
     
});

routes.get('/pagina3', (req, res)=>{
    return res.sendFile(path.join(__dirname + '/html/pagina3.html'));
     
});

routes.get('/pagina4', (req, res)=>{
    return res.sendFile(path.join(__dirname + '/html/pagina4.html'));
     
});
routes.get('/pagina5', (req, res)=>{
    return res.sendFile(path.join(__dirname + '/html/pagina5.html'));
     
});

routes.get('/calculadora', (req, res)=>{
    return res.sendFile(path.join(__dirname + '/html/calculadora.html'));
     
});
routes.get('/manipulador', (req, res)=>{
    return res.sendFile(path.join(__dirname + '/html/manipulador.html'));
     
});


module.exports = routes;