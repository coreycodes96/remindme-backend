import { createUser } from "../../services/users/users.service.js";
import { isUsername } from '../../shared/users/user.js';

export const createAnAccount = async (req, res) => {
    const { username } = req.body;

    try {
        //Checking if username already exists
        if (await isUsername(username)) return res.status(422).json([{ name: 'username' }, { message: 'The username you entered already exists' }]);

        //Create a user
        await createUser(req.body);

        return res.status(201).json('Your account has been successfully created');
    } catch (error) {
        throw new Error(error);
    }
}