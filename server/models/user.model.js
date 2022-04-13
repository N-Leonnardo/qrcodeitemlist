const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    required: [true, "Username is required"],
    unique: [true, "Username should be unique"],
    minlength: [4, "Username must be at least 2 characters"]}
    ,
    password: {
        type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"]
},

},{timestamps: true });

module.exports.User = mongoose.model("User", UserSchema);