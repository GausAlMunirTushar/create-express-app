import http from 'http';
import app from './app/app.js';
import { db } from './config/database.js';

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

// Graceful Shutdown
const shutdown = () => {
	console.log('Shutting down server...');
	server.close(() => {
		console.log('Server closed.');
		process.exit(0);
	});
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

db.authenticate()
	.then(() => {
		console.log('Database Connected');
		server.listen(PORT, () => {
			console.log(`🚀 Server running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => console.log(err));
