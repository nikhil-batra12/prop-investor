var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, '../build'))); //  "public" off of current is root
console.log(path.join(__dirname, '../build'))
app.listen(8081);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
console.log('Listening on port 8081');