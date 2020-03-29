var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'root',
    password: 'Password1!',
    database: 'cafe'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else
        console.log('Cafe Database Connected');
})

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;