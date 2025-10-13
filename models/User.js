const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // You'll need this for password hashing

const UserSchema = new mongoose.Schema({
    // Define the fields required by your server and passport config
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: { // Store the HASHED password
        type: String,
        required: true,
    },
    isActive: { // Used in passport.js to check if the account is active
        type: Boolean,
        default: true
    },
    lastLogin: { // Used in passport.js to track login time
        type: Date
    },
    // ... other user fields (name, role, etc.)
}, { timestamps: true });

// --- IMPORTANT: Password Hashing Middleware ---
// Hash the password before saving (if it has been modified or is new)
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// --- IMPORTANT: Password Comparison Method ---
// This method is required by your config/passport.js file (user.comparePassword(password))
UserSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const User = mongoose.model('User', UserSchema);
module.exports = User;

