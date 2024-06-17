import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator";


//Login User-1

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User not registered" })
        }
        //here password is passowrd entered by user, and user.password is db password
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }
        //if password matches generate one token
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ sucess: false, message: "Error" })
    }
}

//create token-4
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


//register user-1step
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "Account already exists" })
        }

        //valdating email and password strong-2 

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" })
        }

        //encrypt password(hashing)-3
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()

        //sending token
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}


export { loginUser, registerUser }