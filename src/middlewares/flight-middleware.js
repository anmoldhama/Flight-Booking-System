const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber || !req.body.airplaneId || !req.body.departureAirportId || !req.body.arrivalAirportId || !req.body.arrivalTime || !req.body.departureTime || !req.body.price || !req.body.totalSeats){

        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = {explanation: "Mandatory fields are not found!"};
          return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}