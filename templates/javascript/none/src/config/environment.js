import 'dotenv/config';

const environment = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT || 4000),
    host: process.env.HOST || 'localhost',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
    logLevel: process.env.LOG_LEVEL || 'info',
};

environment.isProduction = environment.nodeEnv === 'production';
environment.isDevelopment = environment.nodeEnv === 'development';

export default environment;
