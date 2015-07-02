var express = require('express');
var path = require('path');
var app = express();
var root = path.join(__dirname, '..');
var data = require('./sampledata')

app.get('/', function (req, res) {
    res.sendFile(path.join(root, 'lab', 'index.htm'));
});

app.get('/data', function (req, res) {
    res.send(data.getStates());
});

app.get(/^(.+)$/, function (req, res) {
    res.sendFile(path.join(root, req.params[0]));
});

app.listen(5432, function () {
    console.log("Listening on " + 5432);
});