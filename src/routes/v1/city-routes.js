const express = require('express');

const {CityController} = require('../../controllers');
const {CityMiddleware} = require('../../middlewares');


const router = express.Router();

router.post('/',CityMiddleware.validateCreateRequest,CityController.createCity);
router.put('/:id',CityMiddleware.validateCreateRequest, CityController.updateCity);
// router.get('/:id',AirplaneController.getAirplaneById);
router.delete('/:id',CityController.deleteCity);

//create update , delete endpoints for city

module.exports = router;