const express = require('express');

const { InfoController, CityController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();

router.use('/airplanes', airplaneRoutes);

router.use('/city',cityRoutes);

router.get('/info', InfoController.info);

router.use('/airport', airportRoutes);

router.use('/flight', flightRoutes);

module.exports = router;