const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error')

const airplaneRespository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRespository.create(data);
        return airplane;
    }catch(error){
        if(error.name == "SequelizeValidationError"){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }
}

async function getAllAirplane(){
    try{
        const airplanes = await airplaneRespository.getAll();
        return airplanes;
    }catch(error){
            throw new AppError('Unable to fetch airplanes data', StatusCodes.NOT_FOUND);
    }
}

async function getAirplaneById(data){
    try{
        const airplane = await airplaneRespository.get(data);
        return airplane;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
            throw new AppError('Unable to fetch airplanes data', StatusCodes.NOT_FOUND);
    }
}

async function deleteAirplaneById(data){
    try{
        const airplane = await airplaneRespository.destroy(data);
        return airplane;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
            throw new AppError('Unable to fetch airplanes data', StatusCodes.NOT_FOUND);
    }
}

module.exports = {
    createAirplane,
    getAllAirplane,
    getAirplaneById,
    deleteAirplaneById
}