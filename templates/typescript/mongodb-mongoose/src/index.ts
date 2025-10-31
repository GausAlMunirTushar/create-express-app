import app from '@app/app';
import connectDatabase from '@config/database';
import { logger } from '@utils/logger';

const PORT = process.env.PORT || 4000;

const startServer = async (): Promise<void> => {
	try {
		await connectDatabase();
		app.listen(PORT, () => {
			logger.info(`Server is running on http://localhost:${PORT}`);
		});
	} catch (err) {
		logger.error('Database connection failed:', err);
		process.exit(1);
	}
};

startServer();
