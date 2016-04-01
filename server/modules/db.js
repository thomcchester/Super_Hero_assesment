var mongoose = require("mongoose");

var mongoURI =
   process.env.MONGOLAB_URI ||
   process.env.MONGOHQ_URL ||
   'mongodb://localhost/Hero_DB';

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on("error", function(err){
    console.log("not mongoing the conect", err);
});

mongoDB.on("open", function(err){
    console.log("WE HAVE CONNECTED WITH THE MAINFRAME");
});

module.exports = mongoDB;
