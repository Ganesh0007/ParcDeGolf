const express= require('express');
const app = express.Router();
const golfController = require('../controllers/golf.controller');
const verifyToken = require('../helpers/verifyToken')

app.post('/createGolf/',golfController.createGolf)
app.post('/updateGolf/:id',golfController.updateGolf)
app.post('/deleteGolf/:id',golfController.deleteGolf)
app.get('/oneGolf/:id',golfController.oneGolf)

module.exports=app;