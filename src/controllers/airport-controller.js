const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils/common');

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
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

async function getAllAirport(req, res) {
    try {
        const airports = await AirportService.getAllAirport();
        SuccessResponse.data = airports;
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

async function getAirportById(req, res) {
    try {
        const airport = await AirportService.getAirportById(req.params.id);
        SuccessResponse.data = airport;
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

async function deleteAirportById(req, res) {
    try {
        const airport = await AirportService.deleteAirportById(req.params.id);

        SuccessResponse.data = airport;
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
    createAirport,
    getAllAirport,
    getAirportById,
    deleteAirportById
}