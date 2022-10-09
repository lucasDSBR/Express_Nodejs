var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    // port: 3306,
    // host: 'localhost',
    // user: 'root',
    // password: ''
});

module.exports = connection;