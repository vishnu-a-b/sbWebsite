import mongoose, { Schema, model, models } from 'mongoose';

const VolunteerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, default: 'General' },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
}, { timestamps: true });

const Volunteer = models.Volunteer || model('Volunteer', VolunteerSchema);

export default Volunteer;
