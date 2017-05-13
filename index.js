var express = require('express')
var app = express()
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')


app.use(bodyParser. urlencoded({extended : true}));
app.use(bodyParser.json());

app.engine('hbs',exphbs({defaultLayout:'main' , extname:'.hbs'}));
app.set('view engine', '.hbs');

















app.listen(2000, function(){
	console.log("listen to port 2000")
})
