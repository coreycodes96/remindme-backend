import { isUsername, isPassword } from "../../shared/users/user.js";
import { loginUser } from "../../services/users/users.service.js";
import { createAccessToken } from "../../shared/jwt/createAccessToken.js";
import { createRefreshToken } from "../../shared/jwt/createRefreshToken.js";

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        //Check if the user exists
        if (!await isUsername(username)) return res.status(422).json([{ name: 'username' }, { message: 'Your username doesn\'t exist' }]);
        if (!await isPassword(username, password)) return res.status(422).json([{ name: 'password' }, { message: 'Your password does not match' }]);

        //Getting the user
        const user = await loginUser(username);

        //Setting the data
        const data = {
            'id': user._id,
            'username': user.username,
        };

        //Creating an access token
        const accessToken = createAccessToken(data);

        //Creating a refresh token
        const refreshToken = createRefreshToken(data);

        return res.status(200).json({ data, accessToken, refreshToken });
    } catch (error) {
        throw new Error(error);
    }
}