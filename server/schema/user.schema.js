const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

// crear esquema de usuario

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String
});

module.exports = UserSchema;
