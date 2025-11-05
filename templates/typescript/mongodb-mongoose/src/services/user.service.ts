import User, { IUser } from '@/models/user.model';

export const getAllUsers = async (): Promise<IUser[]> => {
	const users = await User.find().select('-password').exec();
	return users;
};

export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
	const user = new User(data);
	return user.save();
};
