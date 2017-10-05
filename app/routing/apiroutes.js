
module.exports = function(app) {
    var mysql      = require('mysql');
    var exphbs = require("express-handlebars");

    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'Grenada1',
      database : 'burgersDB'
    });
    app.get('/', function(req, res){
        connection.query("SELECT * FROM burgers"), function(err, results) {
            if (err) throw err;
            var hbsObject = {burgers: results};
            res.render("index", hbsObject);
        }

    }),
    app.get("/burger", function(req, res){
        res.send("hi from postman")
    }),
    app.post('/create', function(req, res){
        var burger = req.body.burger_name;
        connection.query("INSERT INTO burgers (burger_name) Values (?)", [burger]), function(err, result) {
            if (err) throw err;
        }
        res.redirect("/");
    })
}