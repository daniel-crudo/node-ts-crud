import { Router } from 'express';
import VehicleController from '../Controller/VehicleController';
const Vehicle = Router()

Vehicle.post('/', VehicleController.create)
Vehicle.get('/', VehicleController.list)


export default Vehicle