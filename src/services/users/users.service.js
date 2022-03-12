import User from '../../models/User.js';
import bcrypt from 'bcryptjs';

//Creating a user
export const createUser = async data => {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 12);
        const newUser = await User.create({ ...data, password: hashedPassword });

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

//Logging in the user
export const loginUser = async username => {
    try {
        const user = await User.findOne({ username });

        return user;
    } catch (error) {
        throw new Error(error);
    }
}