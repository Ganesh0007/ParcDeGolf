const mongoose = require('mongoose');
const config = require('../configs/db.config');

exports.connect = () =>{
    let url = config.url;
    mongoose.connect(url,
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
    ).then(
        () => {
            console.log('Successfully connect to database');
        }
    ).catch(
        err => {
            console.log('Couldnot connect to database', err);
            process.exit(-1);
        }
    )
}