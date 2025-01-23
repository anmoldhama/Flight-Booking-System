const express = require('express');

const {FlightController} = require('../../controllers');
const {FlightMiddleware} = require('../../middlewares');


const router = express.Router();

router.post('/',FlightMiddleware.validateCreateRequest, FlightController.createFlight);
router.get('/',FlightController.getAllFlight);
// router.get('/:id',FlightController.getFlightById);
// router.delete('/:id',FlightController.deleteFlightById);

module.exports = router;