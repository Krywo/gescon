const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const cocheController = require('./scr/ak/controller/cocheController');

const app = express();
app.use(express.json());


app.get('/coches', cocheController.getCoches);
app.post('/coches', cocheController.createCoche);


app.get('/', (req, res) => {
    res.send('<h1>Servidor de Alejandro Operativo en AWS</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor de Alejandro corriendo en puerto ${PORT}`);
});