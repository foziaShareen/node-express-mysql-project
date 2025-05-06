const mysql = require('mysql2/promise');
const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'advance_weapons'
});

module.exports = mysqlPool;