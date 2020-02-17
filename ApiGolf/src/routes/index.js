const express = require('express');
const Router = express.Router();

const adminRoute = require('./admin.route');
const golfRoute = require('./golf.route');
const managerRoute = require('./manager.route');

Router.use(adminRoute);
Router.use(golfRoute);
Router.use(managerRoute);

module.exports = Router;
