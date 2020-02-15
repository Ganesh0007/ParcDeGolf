const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ManagerSchema = new Schema ({
	
    id:{
        type : Number
    },
    nom:{
        type : String
    },
	prenom:{
        type : String
    },
	mail:{
        type : String
    },
	phone:{
        type : Number,
        minlength : 10,
        maxlength : 15
    }
},
{
    timestamps : true
});

module.exports = mongoose.model('manager' , ManagerSchema);