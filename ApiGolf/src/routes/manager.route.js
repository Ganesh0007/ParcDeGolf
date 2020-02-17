const express= require('express');
const Router = express.Router();

const managerController = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken')

Router.post('/createManager/',managerController.createManager)
Router.post('/deleteManager/:id',managerController.deleteManager)
Router.post('/updateManager/:id',managerController.updateManager)
Router.get('/oneManager/:id',managerController.oneManager)

module.exports=Router;