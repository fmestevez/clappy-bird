var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(process.env.PORT || 8080);
