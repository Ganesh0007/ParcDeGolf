const Golf = require("../models/golf.model")


exports.createGolf = (req, res) => {
	let golf = new Golf(
	{
		id: req.body.id,
		titre: req.body.titre,
		latitude: req.body.latitude,
		longitude: req.body.longitude,
		description: req.body.description,
		manager: req.body.manager
	}

);
	golf.save((err) => {
		if(err) {
			console.log('Error in golf save : ',err);
		}
		else {
			console.log("Golf created")
		}

		res.send(golf);
	})
}

exports.updateGolf = (req, res) => {
	Golf.findByIdAndUpdate(req.params.id, req.body, (err, golf) => {
		if(err) {
			console.log("Error in golf update", err);
		}
		res.send("Golf is updated");
	})
}


exports.deleteGolf = function(req, res){
	Golf.findByIdAndRemove(req.params.id, function (err){
		if(err) return(err);
		res.send('Deleted successfully!');
	})
};

exports.oneGolf = (req, res) => {
	Golf.findById(req.params.id, (err, golf) => {
		if(err) {
			console.log("Error in oneGolf : ",err);
		}
		res.send(golf);
	})
}