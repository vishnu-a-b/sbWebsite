import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    // Remove deprecated options (not supported in Mongoose 8.0)
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`❌ Error: ${errorMessage}`);
    process.exit(1);
  }
};

export default connectDB;
