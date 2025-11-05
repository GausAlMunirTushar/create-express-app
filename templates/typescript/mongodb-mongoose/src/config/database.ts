import mongoose from 'mongoose';
import config from './environment';
import logger from '@/utils/logger';

export const connectDatabase = async (): Promise<void> => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(config.mongodbUri);
		logger.info('MongoDB connected successfully');
	} catch (err) {
		logger.error('MongoDB connection failed', err as any);
		process.exit(1);
	}
};
