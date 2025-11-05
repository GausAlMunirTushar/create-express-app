const config = {
	env: process.env.NODE_ENV || 'development',
	port: parseInt(process.env.PORT || '4000'),
	host: process.env.HOST || 'localhost',
	clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
	logLevel: process.env.LOG_LEVEL || 'info',
	mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp',
	isDevelopment: process.env.NODE_ENV === 'development',
	isProduction: process.env.NODE_ENV === 'production',
	isTest: process.env.NODE_ENV === 'test',
} as const;

export default config;
