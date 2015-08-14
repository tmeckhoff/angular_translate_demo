var express = require('express');
var path = require('path');
var app = express();

app.set("port", (process.env.PORT || 5000));

app.get("/*", function(req, res, next){
    var file = req.params[0] || '/assets/views/index.html';
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;
