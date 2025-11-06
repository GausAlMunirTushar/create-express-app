import { Constants } from '../config/constants.js';

export const notFoundHandler = (req, res) => {
    res.status(Constants.HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
};
