import User from "../modules/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;

    if (!userName || email || !password || userName === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    }

    const hashedPass = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        userName,
        email,
        password: hashedPass,
    })

    try {
        await newUser.save();
        res.json('signup successful')
    }
    catch (error){
        next(error)
    }
}