const express = require('express');
const services = require('../services/render');

const route = express.Router();

//Render the web page

route.get('/', services.homeRoutes);

route.get('/add-record', services.addRecord);

route.get('/update-record', services.updateRecord);

module.exports = route;
