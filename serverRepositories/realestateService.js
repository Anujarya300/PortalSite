(function () {

var mysqlconnection = require("../serverUtils/mysqlConnectionSetting.js");

var category = 'Realestate';
	var realestateService = {

		getAllRealestate: function (callback) {

			mysqlconnection.query('SELECT * from adinfo WHERE Category = ?',category, function (err, rows, fields) {
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
				Category: category
			};

			mysqlconnection.query('INSERT INTO adinfo SET ?', sqlData, function (err, result) {
				// Neat!
				console.log(result);
				console.log(err);
				if (callback)
					callback(result);
			});
			
		},

		getRealestate: function (id, callback) {
			// fetch a realestate data from db
			mysqlconnection.query('SELECT * from adinfo where ad_id = ?',id, function (err, rows, fields) {
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

})();