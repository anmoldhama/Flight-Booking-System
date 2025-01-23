const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.name || !req.body.code || !req.body.address || !req.body.cityId || !(typeof req.body.cityId == 'number')){

        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = {explanation: "Mandatory fields not found!"};
          return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}