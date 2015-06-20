/**
 * TrainController
 *
 * @description :: Server-side logic for managing trains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var db = require("seraph")({ user: 'neo4j',
                             pass: 'neo4j1' });
var tra = { name: "train-1" };

module.exports = {

	getseats: function (req, res) {
		db.find(tra, function (err, result) {
				if (err) throw err;
				var train;
				// console.log(result);
				for (r of result) {
					// console.log(r);
					train = r;
					console.log(train["available-seats"]);
					return res.json({number: train["available-seats"]});
				}
				// console.log(train);
		});
	},

	bookseat: function (req, res) {
		db.find(tra, function (err, result) {
				if (err) throw err;
				// console.log(result);
				for (r of result) {
					// console.log(r);
					train = r;
				}
				// console.log(train);
				train["available-seats"]--;
				db.save(train, function(err, node) {
					console.log(node);
					return res.json({number: node["available-seats"]});
				})
		});
	}
};
