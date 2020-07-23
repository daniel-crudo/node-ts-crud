import { Schema, model } from 'mongoose';
const Driver = new Schema({

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
  vehicleList:[],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  
});

//mongoose.model('Vehicle', VehicleSchema );

//mongoose.model('Driver', DriverSchema);

export default model('Driver',Driver)
