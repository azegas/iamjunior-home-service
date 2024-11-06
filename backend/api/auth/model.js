const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true,
    versionKey: false
});

// custom method to check if password is correct
userSchema.methods.isCorrectPassword = function (password) {
    return password === this.password;
};

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel
};