import User from "../../models/User.js";
import bcrypt from "bcryptjs";

//Checking if email exists
export const isEmail = async email => {
    try {
        const doesEmailExist = await User.countDocuments({ email });

        return doesEmailExist === 0 ? false : true;
    } catch (error) {
        throw new Error(error);
    }
}

//Checking if username exists
export const isUsername = async username => {
    try {
        const doesUsernameExist = await User.countDocuments({ username });

        return doesUsernameExist === 0 ? false : true;
    } catch (error) {
        throw new Error(error);
    }
}

//Checking if the password matches
export const isPassword = async (email, password) => {
    try {
        //Check if the password correct
        const user = await User.findOne({ email }, 'password');
        const doesPasswordExist = await bcrypt.compare(password, user.password);

        return doesPasswordExist;
    } catch (error) {
        throw new Error(error);
    }
}