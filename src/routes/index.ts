import {Router} from 'express';
import Driver from './Driver.routes';
import Vehicle from './Vehicle.routes';

const routes = Router();

routes.use('/driver', Driver)
routes.use('/vehicle', Vehicle)


export default routes;
