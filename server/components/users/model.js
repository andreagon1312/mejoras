const {model} = require('mongoose');
const UserSchema = require('../../schema/user.schema');

const userModel = model('User', UserSchema);

module.exports = {userModel};
