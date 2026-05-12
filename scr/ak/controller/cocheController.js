const cocheService = require('../service/cocheService');

const getCoches = async (req, res) => {
    try {
        const marca = req.query.marca;
        const coches = await cocheService.consultarCochesPorMarca(marca);
        res.status(200).json(coches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCoche = async (req, res) => {
    try {
        const nuevoCoche = await cocheService.crearNuevoCoche(req.body);
        res.status(201).json(nuevoCoche);
    } catch (error) {
        // Si el error es de validación (cilindrada <= 0), devolvemos 400
        if (error.message.includes('VALIDATION_ERROR')) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = { getCoches, createCoche };