import { createApp } from './app';
import { connectDB } from '@/config/database';
import { env } from '@/config/env';

async function bootstrap() {
	await connectDB();
	const app = createApp();
	app.listen(env.PORT, () => {
		console.log(`🚀 Server running on http://localhost:${env.PORT}`);
	});
}

bootstrap();
