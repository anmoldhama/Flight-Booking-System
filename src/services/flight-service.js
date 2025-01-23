const { StatusCodes } = require('http-status-codes');
const {FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error')
const {Op} = require('sequelize');

const FlightRespository = new FlightRepository();

async function createFlight(data){
    try{
        const Flight = await FlightRespository.create(data);
        return Flight;
    }catch(error){
        console.log(error);
        if(error.name == "SequelizeValidationError"){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }
}

async function getAllFlight(query){
    let customFilter = {};
    let sortFilter = [];

    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    }

    if(query.price){
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, maxPrice]
        }
    }

    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }

    if(query.departureTime){
        [minDepTime, maxDepTime] = query.departureTime.split("/");
        customFilter.departureTime = {
            [Op.between] : [minDepTime, maxDepTime]
        }
    }

    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param)=> param.split('_'));
        sortFilter = sortFilters
    }
    try{
        const Flights = await FlightRespository.getAllFlights(customFilter,sortFilter);
        return Flights;
    }catch(error){
            throw new AppError('Unable to find any flight', StatusCodes.NOT_FOUND);
    }
}

async function getFlightById(data){
    try{
        const Flight = await FlightRespository.get(data);
        return Flight;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Flight you requested is not present', error.statusCode);
        }
            throw new AppError('Unable to fetch Flights data', StatusCodes.NOT_FOUND);
    }
}

async function deleteFlightById(data){
    try{
        const Flight = await FlightRespository.destroy(data);
        return Flight;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Flight you requested is not present', error.statusCode);
        }
            throw new AppError('Unable to fetch Flights data', StatusCodes.NOT_FOUND);
    }
}

module.exports = {
    createFlight,
    getAllFlight,
    getFlightById,
    deleteFlightById
}