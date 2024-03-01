const User = require('../models/userModel');

async function createUser(req, res) {
    try {
        const { userName, userType, userEmail, userPassword } = req.body;
        const newUser = new User({
            userName,
            userType,
            userEmail,
            userPassword
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//Get All Users

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


//Get User by ID:
async function getUserById(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//Update User
async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const { userName, userType, userEmail, userPassword } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, {
            userName,
            userType,
            userEmail,
            userPassword
        }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//Delete User
async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}






module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};