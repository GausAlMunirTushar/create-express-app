import { User } from '../models/user.model.js';

export const userService = {
    fetchUsers: async () => {
        return await User.find().sort({ createdAt: -1 });
    },

    fetchUserById: async (id) => {
        return await User.findById(id);
    },

    createUser: async (data) => {
        return await User.create(data);
    },

    deleteUser: async (id) => {
        return await User.findByIdAndDelete(id);
    },
};
