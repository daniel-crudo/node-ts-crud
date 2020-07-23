import { Schema, model } from 'mongoose';

const Vehicle = new Schema({
  
  renavam: {
    type: Number,
    required: false
  },
  propName: {
    type: String,
    required: false
  },
  licensePlate: {
    type: String,
    required: false
  }

});


export default model('Vehicle', Vehicle)