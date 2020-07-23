import {Request , Response} from 'express';
//const Driver = mongoose.model('Driver');

import VehicleDTO from '../DTO/VehicleDTO'
import Vehicle from '../models/Vehicle';
import Driver from '../models/Driver';

class VehicleController{
  public async list(req:Request , res:Response): Promise<Response>{

  const getUsers = await Vehicle.find()
  return res.json(getUsers);
}

public async create(req:Request , res:Response): Promise<Response>{
const {renavam, propName, licensePlate } = req.body
const vehicle: VehicleDTO = {
  renavam,
  propName,
  licensePlate,

}
  const checkIfVehicleExists = await Vehicle.findOne({'renavam': renavam})
  if(checkIfVehicleExists){
    return res.status(400).json('user already exists')
  }
  const fullName = propName.split(' ')
  const firstName = fullName[0]
  console.log(fullName)
  const propNameExists = await Driver.findOne({'name':firstName})
  if(!propNameExists){
    return res.status(400).json('you need inform a valid driver name to applying and create a vehicle') 
  }
  const vehicleCreate = await Vehicle.create(vehicle)
  //@ts-ignore
  propNameExists.vehicleList.push(vehicleCreate._id) 
  propNameExists.save()
    
  return res.json(vehicle);
}

}


export default new VehicleController();
