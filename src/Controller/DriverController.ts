import {Request , Response} from 'express';
//const Driver = mongoose.model('Driver');
import Driver from '../models/Driver'

import DriverDTO from '../DTO/DriverDTO'

class DriverRepository{
  public async list(req:Request , res:Response): Promise<Response>{

  const getUsers = await Driver.find()
  return res.json(getUsers);
}

public async create(req:Request , res:Response): Promise<Response>{
const {name, lastname, CPF, Date } = req.body
const driver: DriverDTO = {
  name,
  lastname,
  CPF,
  Date,
  status:"Ativo",
  vehicleList:[],
  createdAt: Date.now,
  updatedAt:Date.now
}
  const checkIfDriverExists = await Driver.findOne({'CPF': CPF})
  if(checkIfDriverExists){
    return res.status(400).json('user already exists')
  }
  await Driver.create(driver)
  return res.json(driver);
}

}

export default new DriverRepository();

