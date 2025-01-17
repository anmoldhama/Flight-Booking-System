const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils/common');

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

async function getAllAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAllAirplane();
        SuccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

async function getAirplaneById(req, res) {
    try {
        const airplane = await AirplaneService.getAirplaneById(req.params.id);
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

async function deleteAirplaneById(req, res) {
    try {
        const airplane = await AirplaneService.deleteAirplaneById(req.params.id);

        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAllAirplane,
    getAirplaneById,
    deleteAirplaneById
}