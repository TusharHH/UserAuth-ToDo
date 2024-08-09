const user = require('../Models/userSchema')

const signup = async (req, res) => {
    const { userName, email, password } = req.body;

    const newUser = new user({
        userName,
        email,
        password
    });

    await newUser.save();

    res.json({
        message: "User created successfully!"
    });
};

module.exports = { signup };