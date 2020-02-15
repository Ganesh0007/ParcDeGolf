const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GolfSchema = new Schema ({
	
	id:{
        type : Number
    },
    titre:{
        type : String
    },
	latitude:{
        type : Number
    },
	longitude:{
        type : Number
    },
	description:{
        type : String
    },
    manager:{
        type :String
    }
},
{
    timestamps : true
});

module.exports = mongoose.model('golf' , GolfSchema);