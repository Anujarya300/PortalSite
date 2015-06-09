
(function () {

	var realestateService = {

		getAllRealestate: function () {
			// data connection to get all realestates
			var mysql = require('mysql');
			var connection = mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: 'titanic300',
				database: 'adportal'
			});

			connection.connect();

			connection.query('SELECT * from adinfo', function (err, rows, fields) {
				if (!err)
					console.log('The solution is: ', rows);
				else
					console.log('Error while performing Query.');
			});

			connection.end();

		},

		getRealestate: function (id) {
			// fetch a realestate data from db
		}
	};
	module.exports = realestateService;

})();