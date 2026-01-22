import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
    default: 'Shanthibhavan Hospital',
  },
  category: {
    type: String,
    enum: ['care', 'facility', 'events', 'services', 'general'],
    default: 'general',
  },
  order: {
    type: Number,
    default: 0,
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

const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);

export default Gallery;
