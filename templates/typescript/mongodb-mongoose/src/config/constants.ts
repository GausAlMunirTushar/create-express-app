export const Constants = {
	HTTP_STATUS: {
		OK: 200,
		CREATED: 201,
		BAD_REQUEST: 400,
		UNAUTHORIZED: 401,
		FORBIDDEN: 403,
		NOT_FOUND: 404,
		INTERNAL_ERROR: 500,
	},
	PAGINATION: {
		DEFAULT_LIMIT: 10,
		MAX_LIMIT: 100,
	},
	ROLES: {
		USER: 'user',
		ADMIN: 'admin',
	},
} as const;
