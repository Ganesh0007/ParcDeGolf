const express = require('express');
const app = express.Router();
const adminRoute = require('./admin.route');
const golfRoute = require('./golf.route');
const managerRoute = require('./manager.route');

app.use(adminRoute);
app.use(golfRoute);
app.use(managerRoute);

module.exports = app;
