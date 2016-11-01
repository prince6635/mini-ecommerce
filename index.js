'use strict';

var express = require('express');

var app = express();

/*jslint unparam: true*/
app.get('/', function (req, res) {
    var name = "Z";
    res.json("My name is " + name);
});

app.get('/health', function (req, res) {
    res.json('Ok');
});
/*jslint unparam: false*/

module.exports = app;
