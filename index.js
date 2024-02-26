const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')

const app = express();
const routerAPI = require('./server/router');


app.use(cors());
app.use(express.json());
routerAPI(app);

app.use('/', express.static(path.resolve(__dirname, 'client', 'home')));

mongoose.connect('mongodb+srv://andreagon1312:andrea12345@cluster0.4dxzmpu.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'))
  .catch((err) => console.error(err));

app.listen(3100, () =>{
    console.log('aplicacion corriendo en el puerto 3100');
});