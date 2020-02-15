const express= require('express');
const app = express.Router();
const managerController = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken')

app.post('/createManager/',managerController.createManager)
app.post('/deleteManager/:id',managerController.deleteManager)
app.post('/updateManager/:id',managerController.updateManager)
app.get('/oneManager/:id',managerController.oneManager)

module.exports=app;