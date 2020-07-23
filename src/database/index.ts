import mongoose from 'mongoose';
import requireDir from 'require-dir';
import '../models/Model'

requireDir('../models')

mongoose.connect('mongodb://localhost:27017/V12', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
