var express = require("express");

var app = express();
var PORT = process.env.PORT || 8000;
var db = require("./models");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
  