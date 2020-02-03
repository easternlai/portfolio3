var express = require("express");

var app = express();
var db = requie("./models");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);