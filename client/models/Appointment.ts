import mongoose, { Schema, model, models } from 'mongoose';

const AppointmentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  typeOfService: { type: String, required: true },
  preferredDate: { type: Date, required: true },
  message: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
    default: 'pending' 
  },
}, { timestamps: true });

const Appointment = models.Appointment || model('Appointment', AppointmentSchema);

export default Appointment;
