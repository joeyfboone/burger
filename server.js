const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Grenada1',
  database : 'burgersDB'
});

app.use(methodOverride('X-HTTP-Method-Override'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type:"applicaiton./vnd.api+json"}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./app/routing/apiroutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on " + PORT);
})
