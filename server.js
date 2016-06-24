var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); // npm, express server
var PORT = process.env.PORT || 80; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// listener

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});