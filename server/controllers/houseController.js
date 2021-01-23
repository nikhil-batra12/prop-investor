var app = require("../app");

exports.getHouses = getHouses;
exports.getPopularHouses = getPopularHouses;

function getHouses(req, res) {
  const con = app.con;
  con.query("SELECT * FROM houses", function (err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify({ houses: result }));
  });
  //   res.send(JSON.stringify(require("../responses/house-response.json")));
}

function getPopularHouses(req, res) {
  res.send(JSON.stringify(require("../responses/popular-houses.json")));
}
