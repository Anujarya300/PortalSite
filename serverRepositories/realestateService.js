(function () {

	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'titanic300',
		database: 'adportal'
	});

	var realestateService = {

		getAllRealestate: function (callback) {

			connection.query('SELECT * from adinfo', function (err, rows, fields) {
				if (!err) {
					console.log('The solution is: ', rows);
					callback(rows);
				}
				else
					console.log('Error while performing Query.');
			});

		},

		addRealestate: function (data, callback) {
			var sqlData = {
				AdTitle: data.title,
				Description: data.description,
				AdType: 'Sell',
				Category: 'Realestate'
			};

			connection.query('INSERT INTO adinfo SET ?', sqlData, function (err, result) {
				// Neat!
				console.log(result);
				console.log(err);
				if (callback)
					callback(result);
			});
			
		},

		getRealestate: function (id, callback) {
			// fetch a realestate data from db
			connection.query('SELECT * from adinfo where ad_id = ?',id, function (err, rows, fields) {
				if (!err) {
					console.log('The solution is: ', rows);
					callback(rows);
				}
				else
					console.log('Error while performing Query.');
			});
		}
	};
	module.exports = realestateService;
var pass = 'titanic300';
})();