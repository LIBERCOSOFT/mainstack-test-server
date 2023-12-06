import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connector = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`Database connected to ${connector.connection.host}`);
  } catch (err: any) {
    console.error(`Error: ${(err as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
