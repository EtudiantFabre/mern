const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
            sameSite: "strict", // Adjust as needed
        });
        res.status(201).json({ message: "User signed up successfully", success: true, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }
        const token = createSecretToken(user._id);
        console.log("token",token);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
            sameSite: "strict", // Adjust as needed
        });
        res.status(200).json({ message: "User logged in successfully", success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};