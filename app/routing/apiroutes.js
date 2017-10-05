
module.exports = function(app) {
    var mysql      = require('mysql');
    var exphbs = require("express-handlebars");

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
            password: "Grenada1",
            database: "burgersDB",
        });
    };
    app.get('/', function(req, res){
        connection.query("SELECT * FROM burgers", function(err, results) {
           if (err) throw err;
//            var hbsObject = {burgers: results};
            res.render("index",{burgers: results});
        })
    
    }),
    app.get("/burger", function(req, res){
        console.log(req.params)
        res.send("hi from postman")
    }),
    app.post('/create', function(req, res){
        var burger = req.body.burger_name;
        connection.query("INSERT INTO burgers (burger_name) Values (?)", [burger]), function(err, result) {
            if (err) throw err;
        }
        res.redirect("/");
    }),
    app.post('/devour/:id', function(req, res){
        var id= req.params.id;
        connection.query("UPDATE burgers SET devoured = '1' WHERE id = ?", [id]), function(err, result) {
            if (err) throw err;
        }
        res.redirect("/");
    })
}