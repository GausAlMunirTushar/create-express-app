import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

/**
 * Connect to MongoDB with retry logic
 */
const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log(' MongoDB connected successfully');
	} catch (error) {
		console.error(' MongoDB connection error:', error.message);
		process.exit(1); // Exit process with failure
	}
};

/**
 * Graceful shutdown handler
 */
const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
		console.log('MongoDB disconnected');
	} catch (error) {
		console.error('Error disconnecting MongoDB:', error.message);
	}
};

export { connectDB, disconnectDB };
