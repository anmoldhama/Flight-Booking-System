const { StatusCodes } = require('http-status-codes');
const {AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error')

const airportRespository = new AirportRepository();

async function createAirport(data){
    try{
        const airport = await airportRespository.create(data);
        return airport;
    }catch(error){
        console.log(error);
        if(error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError"){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }
}

async function getAllAirport(){
    try{
        const airports = await airportRespository.getAll();
        return airports;
    }catch(error){
            throw new AppError('Unable to fetch airports data', StatusCodes.NOT_FOUND);
    }
}

async function getAirportById(data){
    try{
        const airport = await airportRespository.get(data);
        return airport;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
            throw new AppError('Unable to fetch airports data', StatusCodes.NOT_FOUND);
    }
}

async function deleteAirportById(data){
    try{
        const airport = await airportRespository.destroy(data);
        return airport;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
            throw new AppError('Unable to delete airports data', StatusCodes.NOT_FOUND);
    }
}

module.exports = {
    createAirport,
    getAllAirport,
    getAirportById,
    deleteAirportById
}