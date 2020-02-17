const Manager = require("../models/manager.model")


exports.createManager = (req, res) => {
	let manager = new Manager(
	{
		id: req.body.id,
		nom: req.body.nom,
		prenom: req.body.prenom,
		mail: req.body.mail,
		phone: req.body.phone
	}

);
	manager.save((err) => {
		if(err) {
			console.log("Error in save manager",err);
		}
		else {
			console.log("Manager created")
		}

		res.send(manager);
	})
}


exports.deleteManager = function(req, res){
	manager.findByIdAndRemove(req.params.id, function (err){
		if(err) return(err);
		res.send('Deleted successfully!');
	})
};


exports.updateManager = (req, res) => {
	Manager.findByIdAndUpdate(req.params.id, req.body, (err, manager) => {
		if(err) {
			console.log("Error in update manager", err);
		}
		res.send("Manager is updated");
	})
}


exports.oneManager = (req, res) => {
	Manager.findById(req.params.id, (err, manager) => {
		if(err) {
			console.log("Error in oneManager",err);
		}
		res.send(manager);
	})
}
