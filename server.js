var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var User = require('./models/user');

var app = express();
// Middleware for logging info
app.use(morgan('dev'));
// Middleware for parsing different types of request bodies
app.use(bodyParser.json()); // Parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded (if use form-data, it won't save correctly)

// Connect to the database
mongoose.connect('mongodb://root:admin@ds019796.mlab.com:19796/miniecommerce', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

app.get('/', function (req, res) {
    var name = "Z";
    res.json("My name is " + name);
});

app.get('/health', function (req, res) {
    res.json('Ok');
});

app.post('/create-user', function (req, res, next) {
    var user = new User();

    // req.body is parsed by body-parser
    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;

    user.save(function (err) {
        // Need to return, otherwise it'll always print out the successful result.
        if (err) return next(err);

        res.json('Successfully created a new user');
    });
});

app.listen(3000, function (err) {
    if (err) throw err;
    console.log("Server is running on port 3000");
});
