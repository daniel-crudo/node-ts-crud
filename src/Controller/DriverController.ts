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
public async update(req:Request , res:Response): Promise<Response>{
  const {name,status,lastName,Date,CPF} = req.body;
  const updateUsers = await Driver.findOne({'CPF': CPF})
  console.log(status)
  if (!CPF) {
    return res.status(400).json('you must type a valid CPF')
  } if (status == 'Ativo' || status == 'Inativo') {
    //@ts-ignore
  status?updateUsers.status = status:null
  }
  //@ts-ignore
  name?updateUsers.name = name:null
  //@ts-ignore
  lastName?updateUsers.lastName = lastName:null
  //@ts-ignore
  Date?updateUsers.Date = Date:null
  //@ts-ignore
  CPF?updateUsers.CPF = CPF:null
  
  await updateUsers?.save() 
  return res.json(updateUsers);
}

}

export default new DriverRepository();

