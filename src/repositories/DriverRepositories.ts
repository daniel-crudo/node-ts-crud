import {Request , Response} from 'express';
//const Driver = mongoose.model('Driver');
import Driver from '../models/Model'
class DriverRepository{
  public async list(req:Request , res:Response): Promise<any>{

  const getUsers = await Driver.find()
  return res.json(getUsers);
}
// public async create(name:string,lastname:string,CPF:number,Date:string,status = 'Ativo'): Promise<any> {
//   const userBody = {
//   name,
//   lastname,
//   CPF,
//   Date,
//   status
// }
//   await Driver.create(userBody)
 
//   return userBody;
// } 
}

export default new DriverRepository();

