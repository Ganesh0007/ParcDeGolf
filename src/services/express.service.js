const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require ('body-parser');
const apiRouter = require('../routes/index');
const cors=require('cors');

// Démarer express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/v1',apiRouter);

exports.start = () => {

    let port = config.port;

    app.listen (port, (err) => {
        if (err){
            console.log(`Error:${err}`);
            //console.log(`Error:`, port);
            //console.log('Error:' .err);
            process.exit(-1);
        }
        console.group(`app is running on port ${port}`);
    })
}
