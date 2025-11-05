declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'test';
			PORT?: string;
			HOST?: string;
			CLIENT_URL?: string;
			LOG_LEVEL?: string;
		}
	}
}
export {};

declare module '@/app/*';
declare module '@/config/*';
declare module '@/controllers/*';
declare module '@/middlewares/*';
declare module '@/models/*';
declare module '@/routes/*';
declare module '@/services/*';
declare module '@/utils/*';
declare module '@/types/*';
