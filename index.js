const express = require('express');
const dotenv = require('dotenv');
const cocheController = require('./src/ak/controller/cocheController');

dotenv.config();
const app = express();
app.use(express.json());

// Endpoints requeridos por el proyecto
app.get('/coches', cocheController.getCoches);
app.post('/coches', cocheController.createCoche);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Alejandro corriendo en http://localhost:${PORT}`);
});