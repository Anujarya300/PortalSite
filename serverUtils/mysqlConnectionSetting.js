(function () {
var mysql = require('mysql');
var mysqlconnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'adportal'
});

module.exports = mysqlconnection;
	
})();
