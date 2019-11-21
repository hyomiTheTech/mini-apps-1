const mysql = require('mysql');

var db = mysql.createConnection({
    database: 'userinfoDB',
    user: 'root',
    password: 'Rladmlgus90'
});


module.exports = db;