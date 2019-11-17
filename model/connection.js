
const config = require('../model/config/config.json');
const mysql = require('mysql');

const con = mysql.createConnection(config);

con.connect((error) => {
    if(error) () => console.log('Cannot connect to MySQL server.');
    else console.log('Connected to MySQL server.');
});

module.exports.con = con;