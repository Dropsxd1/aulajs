console.log("Servidor inicializado!");

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res){
    res.send("Olá");
});

app.get("/contato", function (req, res){
    res.render('contato');
});


app.post("/contato", function (req, res){
    res.send("<h1>post enviou um for</h1>");

});


app.listen(3000);

