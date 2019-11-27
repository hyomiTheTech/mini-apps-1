const mysql = require('mysql');

var db = mysql.createConnection({
    database: 'userinfoDB',
    user: 'root',
    password: ''
});


module.exports = db;
