var app = require('./express'); // creates an instance of the express lib
var express = app.express;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public')); //anything under the public directory will
                                                // be static and send it verbatim; slash is now public/

require ("./assignment/app.js");

var port = process.env.PORT || 3000;

app.listen(port);