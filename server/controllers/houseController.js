exports.getHouses = getHouses;
function getHouses(req, res) {
  res.send(JSON.stringify(require("../responses/house-response.json")));
}
