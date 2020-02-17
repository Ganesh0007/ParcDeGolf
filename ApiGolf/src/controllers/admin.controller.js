const admin = require("../models/admin.model")
const bcrypt = require('bcrypt');
const jwt = require('../configs/jwt.config');

exports.createAdmin = (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

	const admin = new admin(
	{
		nom: req.body.nom,
		prenom: req.body.prenom ,
        email: req.body.email,
        function: req.body.function,
		password: hashedPassword,
		admin: req.body.admin
    })
    
    admin.save()
        .then(data => {
            let adminToken = jwt.sign({
                    id: admin.email,                    
                    admin: admin.admin,
                    email: admin.email
                },
                "supersecret", {
                    expiresIn: 86400
                }
            )
            res.send({
                auth: true,
                token: adminToken,
                body: {
                    email: data.email,
                    prenom: data.prenom,
                    password : data.password
                }
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log('Error in admin save : ',err)
        })
}

exports.login = (req, res) => {
    //requête pour retrouver un admin en BDD -> findOne
    console.log(req.body);
    admin.findOne({ email: req.body.email },
        function(err, admin) {
            //si aucun admin
            if (!admin) return res.status(404).send('admin not found');
            //comparaison des mdp
            let passwordIsValid = bcrypt.compareSync(req.body.password, admin.password);
            //check si la comparaison est True
            if (!passwordIsValid) return res.status(401).send({
                auth: false,
                token: null
            });
            //On génère le token grâce à la méthode sign
            let token = jwt.sign({
                    id: admin._id,
                    admin: admin.admin,
                    data:admin
                },
                "supersecret", {            // Trouver un truc pour le cacher
                    expiresIn: 86400
                }
            );
            res.status(200).send({
                auth: true,
                token: token,
                data: admin
            })
        }
    )
}