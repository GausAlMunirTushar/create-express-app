import app from '@app/app';
import { logger } from '@utils/logger';

const PORT = process.env.PORT || 4000;

const startServer = async (): Promise<void> => {
	try {
		app.listen(PORT, () => {
			logger.info(`Server is running on http://localhost:${PORT}`);
		});
	} catch (err) {
		logger.error('Database connection failed:', err);
		process.exit(1);
	}
};

startServer();
