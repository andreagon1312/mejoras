const {userModel} = require('./model');
const store = require('./store.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// CRUD = C = create, R = Read, U = Update, D = Delete

// crea una funcion asincrona donde agregues el usuario y debes esperar llamar al modelo y traerse una propiedad llamada create y le pasas el usuario creado 

async function addUser(user) {
  const data = {
    ...user,
    password: await bcrypt.hash(user.password, 10)
  }
  const newUser = await userModel.create(data);

  return newUser;
}

async function getUsers(){
 const users = await userModel.find();
 return users;
} 

module.exports = {
  add: addUser,
  list: getUsers
}