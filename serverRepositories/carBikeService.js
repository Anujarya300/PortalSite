(function () {

var mysqlConnection = require("../serverUtils/mysqlConnectionSetting.js");

	var category = 'CarBike';
	var carbikeService = {
		
		getAllCarBikes: function (callback) {

			mysqlConnection.query('SELECT * from adinfo WHERE Category = ?',category, function (err, rows, fields) {
				if (!err) {
					console.log('The solution is: ', rows);
					callback(rows);
				}
				else
					console.log('Error while performing Query.');
			});

		},

		addCarbike: function (data, callback) {
			var sqlData = {
				AdTitle: data.title,
				Description: data.description,
				AdType: 'Sell',
				Category: category
			};

			mysqlConnection.query('INSERT INTO adinfo SET ?', sqlData, function (err, result) {
				// Neat!
				console.log(result);
				console.log(err);
				if (callback)
					callback(result);
			});
			
		},

		getCarBike: function (id, callback) {
			// fetch a realestate data from db
			mysqlConnection.query('SELECT * from adinfo where ad_id = ?',id, function (err, rows, fields) {
				if (!err) {
					console.log('The solution is: ', rows);
					callback(rows);
				}
				else
					console.log('Error while performing Query.');
			});
		}
	};
	module.exports = carbikeService;

})();