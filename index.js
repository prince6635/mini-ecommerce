var express = require('express');

var app = express();
app.get('/', function (req, res) {
    var name = "Z";
    res.json("My name is " + name);
});

app.get('/health', function (req, res) {
    res.json('Ok');
});

module.exports = app;
