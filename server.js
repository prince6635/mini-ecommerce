var express = require('express');
var morgan = require('morgan');

var app = express();
// Middleware for logging info
app.use(morgan('dev'));

app.get('/', function (req, res) {
    var name = "Z";
    res.json("My name is " + name);
})
app.get('/health', function (req, res) {
    res.json('Ok');
})

app.listen(3000, function (err) {
    if (err) throw err;
    console.log("Server is running on port 3000");
})
