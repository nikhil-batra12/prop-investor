exports.authenticate = authenticate;
exports.signup = signup;
exports.getUserDetails = getUserDetails;
exports.registerUser = registerUser;

function authenticate(req, res) {
  res.send(JSON.stringify(require("../responses/authenticate.json")));
}

function signup(req, res) {
  res.send(JSON.stringify(require("../responses/signup.json")));
}

function getUserDetails(req, res) {
  res.send(JSON.stringify(require("../responses/user-details.json")));
}

function registerUser(req, res) {
  res.send(JSON.stringify(require("../responses/register-user.json")));
}
