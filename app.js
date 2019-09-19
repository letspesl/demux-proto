const express = require('express');
const app = express();
const watcher = require('./index.js');

app.get('/', function (req, res) {
    res.send('Working...');
});

app.listen(5000, function () {
    watcher.watch();
    console.log('Example app listening on port 5000!');
});