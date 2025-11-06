import { userService } from '../services/user.service.js';
import { Constants } from '../config/constants.js';

export const getAllUsers = async (_req, res, next) => {
    try {
        const users = await userService.fetchUsers();
        res.status(Constants.HTTP_STATUS.OK).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await userService.fetchUserById(req.params.id);
        if (!user) {
            return res
                .status(Constants.HTTP_STATUS.NOT_FOUND)
                .json({ success: false, message: 'User not found' });
        }
        res.status(Constants.HTTP_STATUS.OK).json({
            success: true,
            data: user,
        });
    } catch (err) {
        next(err);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(Constants.HTTP_STATUS.CREATED).json({
            success: true,
            data: user,
        });
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            return res
                .status(Constants.HTTP_STATUS.NOT_FOUND)
                .json({ success: false, message: 'User not found' });
        }
        res.status(Constants.HTTP_STATUS.OK).json({
            success: true,
            message: 'User deleted successfully',
        });
    } catch (err) {
        next(err);
    }
};
