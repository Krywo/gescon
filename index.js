const express = require('express');
const dotenv = require('dotenv');
const cocheController = require('./src/ak/controller/cocheController');

dotenv.config();

const app = express();
app.use(express.json()); // Vital para leer los cuerpos JSON de Hoppscotch

// Rutas de la API
app.get('/coches', cocheController.getCoches);
app.post('/coches', cocheController.createCoche);

// Ruta de cortesía para pruebas en el navegador
app.get('/', (req, res) => {
    res.send('<h1>Servidor de Alejandro Operativo con Arquitectura Modular en AWS</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${PORT}`);
});