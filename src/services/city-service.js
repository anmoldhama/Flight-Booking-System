const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error')

const cityRespository = new CityRepository();

async function createCity(data){
    try{
        const city = await cityRespository.create(data);
        return city;
    }catch(error){
        if(error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError"){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }
}

async function updateCity(id,data){
    try{
        
        const city = await cityRespository.update(id,data);
        return city;
    }catch(error){
        if(error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError"){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }
}

async function deleteCity(id){
    try{
        const city = await cityRespository.destroy(id);
        return city;
    }catch(error){
        if(error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError"){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }
}

module.exports = {
    createCity,
    updateCity,
    deleteCity
}

