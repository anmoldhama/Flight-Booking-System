const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils/common');

async function createFlight(req, res) {
    try {
        const Flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats
        });
        SuccessResponse.data = Flight;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

async function getAllFlight(req, res) {
    try {
        const Flights = await FlightService.getAllFlight(req.query);
        SuccessResponse.data = Flights;
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

async function getFlightById(req, res) {
    try {
        const Flight = await FlightService.getFlightById(req.params.id);
        SuccessResponse.data = Flight;
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

async function deleteFlightById(req, res) {
    try {
        const Flight = await FlightService.deleteFlightById(req.params.id);

        SuccessResponse.data = Flight;
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
    createFlight,
    getAllFlight,
    getFlightById,
    deleteFlightById
}