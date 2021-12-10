const mongoose = require('./mongooseDb')

const User = mongoose.model('User', {
    username: String,
    password: String
})

async function createUser(userData) {
    let newUser = new User(userData)
    let createdUser = await newUser.save()
    return createdUser.id
}

async function findUserByUsername(username) {
    return User.findOne({ username })
}

async function listUsers() {
    return User.find({})
}

async function findById(id) {
    return User.findById(id)
}


async function deleteUser(id) {
    return User.findByIdAndDelete(id)
}

module.exports = {
    createUser,
    listUsers,
    findById,
    deleteUser,
    findUserByUsername
}
