// Controller function to get the user's profile
async function getProfile(req, res) {
  try{
    const user = await User.findById(req.user._id).select('-password'); // Exclude password from the response
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
  }catch(err){
    res.status(500).json({error:'Internal Server Error'})
  }
};

// Controller function to update the user's profile
async function updateProfile(req, res) {
  // ... (implement logic to update the user's profile)
};

module.exports = {
  getProfile,
  updateProfile
};
