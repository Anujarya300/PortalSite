(function () {
	
	var realestateService = {

		getAllRealestate: function (callback) {
			// data connection to get all realestates
			var mysql = require('mysql');
			var connection = mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: 'root',
				database: 'test'
			});

			connection.connect();

			connection.query('SELECT * from t1', function (err, rows, fields) {
				if (!err)
				{
					console.log('The solution is: ', rows);
					callback(rows);
				}
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