
module.exports = function(app) {
    app.get('/', function(req, res){
//        res.render("index", {burgers: db});
          res.render("index");
    }),
    app.get("/burger", function(req, res){
        res.send("hi from postman")
    })
}