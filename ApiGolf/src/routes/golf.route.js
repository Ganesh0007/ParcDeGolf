const express = require('express');
const Router = express.Router();

const golfController = require('../controllers/golf.controller');

Router.post('/createGolf/',golfController.createGolf)
Router.post('/updateGolf/:id',golfController.updateGolf)
Router.post('/deleteGolf/:id',golfController.deleteGolf)
Router.get('/oneGolf/:id',golfController.oneGolf)

module.exports=Router;