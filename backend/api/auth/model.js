const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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


// hash password before saving to database
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// custom method to check if hashed password is correct
userSchema.methods.isCorrectPassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel
};