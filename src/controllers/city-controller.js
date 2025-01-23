const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils/common');


async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
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

async function updateCity(req, res) {
    try {
        const airplane_id = req.params.id;
        const city = await CityService.updateCity(airplane_id,{
            name: req.body.name
        });
        SuccessResponse.data = city;
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

async function deleteCity(req, res) {
    try {
        const airplane_id = req.params.id;
        const city = await CityService.deleteCity(airplane_id);
        SuccessResponse.data = city;
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
    createCity,
    updateCity,
    deleteCity
}