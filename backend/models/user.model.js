const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator')

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8 
    }
});

userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    }   catch (err) {
        return next(err);
    }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;