const express = require('express');

const {AirplaneController} = require('../../controllers');
const {AirplaneMiddleware} = require('../../middlewares');


const router = express.Router();

router.post('/create',AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get('/getAll',AirplaneController.getAllAirplane);

module.exports = router;