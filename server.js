const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
var dbpassword = require("./keys.js");
const app = express();

const PORT = process.env.PORT || 3000;

var mysql      = require('mysql');
var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: dbpassword,
        database: "burgersDB",
    });
};

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
