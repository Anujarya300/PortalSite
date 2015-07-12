(function () {

	var mysqlconnection = require("../serverUtils/mysqlConnectionSetting.js");

	var loginService = {

		getUserByName: function (name, callback) {

			mysqlconnection.query('SELECT * from userinfo WHERE EmailId = ?', name, function (err, rows, fields) {
				if (!err) {
					console.log('The solution is: ', rows);
					callback(rows[0]);
				}
				else
					console.log('Error while performing Query.');
			});

		},

		addUser: function (user, callback) {
			var sqlData = {
				password: user.password,
				Name: user.name,
				Address: user.address,
				ContactNo: user.contactNo,
				EmailID: user.emailId
			};

			mysqlconnection.query('INSERT INTO userinfo SET ?', sqlData, function (err, result) {
				// Neat!
				console.log("inside add userinfo");
				console.log(result);
				console.log(err);
				if (callback)
					callback(result);
			});

		}
	};

	module.exports = loginService;

})();