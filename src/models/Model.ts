import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
  
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

const DriverSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  CPF: {
    type: Number,
    required: true
  },
  Date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Ativo'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  vehicleList:[VehicleSchema]
  
});

mongoose.model('Vehicle', VehicleSchema );

mongoose.model('Driver', DriverSchema);