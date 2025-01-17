const express = require('express');

const {CityController} = require('../../controllers');
const {CityMiddleware} = require('../../middlewares');


const router = express.Router();

router.post('/',CityMiddleware.validateCreateRequest,CityController.createCity);
// router.get('/',AirplaneController.getAllAirplane);
// router.get('/:id',AirplaneController.getAirplaneById);
// router.delete('/:id',AirplaneController.deleteAirplaneById);

//create update , delete endpoints for city

module.exports = router;