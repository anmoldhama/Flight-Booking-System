const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.name){

        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error = {explanation: "name not found!"};
          return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}