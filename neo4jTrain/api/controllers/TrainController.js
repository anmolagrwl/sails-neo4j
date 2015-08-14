/**
 * TrainController
 *
 * @description :: Server-side logic for managing trains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var db = require("seraph")({ user: 'neo4j',
                             pass: 'neo4j1' });
var tra = { name: "Train-1" };

module.exports = {

	getseats: function (req, res) {
		db.find(tra, function (err, result) {
			// console.log(tra);
				if (err) throw err;
				var train;
				// console.log(result);

				for (var r = result.length - 1; r >= 0; r--) {
					// console.log(r);
					train = result[r];
					// console.log(train["availableSeats"]);
					return res.json({number: train["availableSeats"]});		
				};

				// for (r of result) {
				// 	// console.log(r);
				// 	train = r;
				// 	// console.log(train["availableSeats"]);
				// 	return res.json({number: train["availableSeats"]});
				// }
				console.log(train);
		});
	},

	bookseat: function (req, res) {
		db.find(tra, function (err, result) {
				if (err) throw err;
				// console.log(result);
				for (var r = result.length - 1; r >= 0; r--) {
					// console.log(r);
					train = result[r];
					// console.log(train["availableSeats"]);	
				};
				// console.log(train);
				train["availableSeats"]--;
				db.save(train, function(err, node) {
					// console.log(node);
					return res.json({number: node["availableSeats"]});
				})
		});
	}
};


// CREATE(:Train{name: "Train-1", availableSeats: 50})
// CREATE(:City{name: "Mumbai"})
// CREATE(:City{name: "Delhi"})
//
// MATCH (d:City{name:"Delhi"}), (t:Train{name:"Train-1"}) CREATE (d)-[:ORIGIN]->(t)
// MATCH (m:City{name:"Mumbai"}), (t:Train{name:"Train-1"}) CREATE (t)-[:DESTINATION]->(m)