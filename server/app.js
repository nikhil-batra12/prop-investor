var express = require("express");
var app = express();
var path = require("path");
const cors = require("cors");
var bodyParser = require("body-parser");
var mysql = require("mysql");

/* Internal controller dependencies*/
var houseController = require("./controllers/houseController");
var authController = require("./controllers/authController");

/* Set port for local/heroku environment*/
var port = process.env.PORT || 3001;

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "mydb",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   activateApp();
// });

// Activate the app and routes
function activateApp() {
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(cors());
  app.options("*", cors());
  // parse application/json
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get("/house", houseController.getHouses);

  app.get("/popular-houses", houseController.getPopularHouses);

  app.get("/properties", houseController.getAllProperties);

  app.post("/authenticate", authController.authenticate);

  app.post("/registerProperty", houseController.registerProperty);

  app.get("/user", authController.getUserDetails);

  app.post("/registerUser", authController.registerUser);

  app.post("/updateUser", authController.updateUser);

  app.get("/property/:id", houseController.fetchPropertyDetails);

  app.get("/property/:id", houseController.fetchPropertyDetails);

  app.get("/my-investments", houseController.fetchMyInvestments);

  //Start server to listen on port
  app.listen(port, function () {
    console.log("App server started", port);
  });
}
activateApp();
// exports.con = con;
