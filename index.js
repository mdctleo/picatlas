var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
    if (req.session.location_choices){
        req.session.location_choices++;
        res.send("You visited this page " + req.session.page_views + " times");
    } else {
        var location_choices = {};

        req.session.location_choices = 1;
        res.send("Welcome to this page for the first time!");
    }
});
app.listen(3000);