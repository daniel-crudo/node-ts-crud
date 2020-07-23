import { Router, response } from 'express';
import CreateDriverService  from '../services/CreateDriverService';
import { request } from 'http';
import DriverRepository from '../repositories/DriverRepositories';
const Driver = Router()

Driver.post('/', (request, response) => {
  
})

Driver.get('/', DriverRepository.list)
//Driver.get('/', (request, response) => {
//response.json('Olá')


export default Driver;