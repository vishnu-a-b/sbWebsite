import mongoose from 'mongoose';

const AboutImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: 'Shanthibhavan Hospital',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AboutImage = mongoose.models.AboutImage || mongoose.model('AboutImage', AboutImageSchema);

export default AboutImage;
