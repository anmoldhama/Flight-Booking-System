const express = require('express');

const {AirplaneController} = require('../../controllers');
const {AirplaneMiddleware} = require('../../middlewares');


const router = express.Router();

router.post('/',AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get('/',AirplaneController.getAllAirplane);
router.get('/:id',AirplaneController.getAirplaneById);
router.delete('/:id',AirplaneController.deleteAirplaneById);

module.exports = router;