exports.authenticate = authenticate;
exports.signup = signup;

function authenticate(req, res) {
  res.send(JSON.stringify(require("../responses/authenticate.json")));
}

function signup(req, res) {
  res.send(JSON.stringify(require("../responses/signup.json")));
}
