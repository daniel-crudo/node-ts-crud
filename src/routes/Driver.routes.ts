import { Router, response } from 'express';
import { request } from 'http';
import DriverRepository from '../Controller/DriverController';
const Driver = Router()

Driver.post('/',DriverRepository.create )

Driver.get('/', DriverRepository.list)

Driver.put('/', DriverRepository.update)
//Driver.get('/', (request, response) => {
//response.json('Olá')


export default Driver;