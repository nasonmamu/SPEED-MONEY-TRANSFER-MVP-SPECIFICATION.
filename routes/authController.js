const User = require('../models/user');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


// Controller function for user login
async function login(req, res) {
    const {username, password} = req.body

    try{
    const user = await User.findOne({username})
    if(!user || !await bcrypt.compare(password,user.password)){
    return res.status(400).json({error:'Invalid credentials'})
    }
    const token = jwt.sign({id:user._id},keys.jwtSecret)
    res.json({token})
    }
    catch(err){
        res.status(500).json({error:'something went wrong'})
    }
}

// Controller function for user registration
async function register(req, res) {
    const {username, password, email} = req.body
    try{
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        password:hashedPassword,
        email
    })
    const token = jwt.sign({id:user._id},keys.jwtSecret)
    res.status(201).json({token})
    }catch(err){
        res.status(400).json({error:'Failed to create an account'})
    }
};

// Controller function for user logout
async function logout(req, res) {
  try{
    req.user.tokens = []; // Assuming you have a 'tokens' array in your user model
    await req.user.save();
    res.status(200).json({ message: 'Logged out successfully' });
  }catch(err){
    res.status(500).json({error:'Internal server error'})
  }
};

module.exports = {
  login,
  register,
  logout
};
