import User from '../model/user.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const { first_name, last_name, email, password } = req.body
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exist" });
        let result = await User.create({ first_name, last_name, email, password })
        res.status(200).json({ result, message: "Register sucesfully" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const signin = async (req, res) => {
    const { email } = req.body;
    if (req.body.password && req.body.email) {
        try {
            const existingUser = await User.findOne({ email }).select(["-first_name", "-last_name"]);
            if (!existingUser)
                return res.status(404).json({ message: "User doesn't exist" });
            res.status(200).json({ result: existingUser, })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    } else {
        res.send({ result: "no user found" })
    }
}