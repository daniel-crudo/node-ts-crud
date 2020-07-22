import { Router, response } from 'express';

const Driver = Router()

Driver.get('/', (request,response) => {
  response.json("Bateu!")
})


export default Driver