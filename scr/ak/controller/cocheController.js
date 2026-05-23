const cocheService = require('../service/cocheService');

exports.getCoches = (req, res) => {
    cocheService.consultarCoches((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

exports.createCoche = (req, res) => {
    const nuevoCoche = req.body;

    cocheService.crearNuevoCoche(nuevoCoche, (err, result) => {
        if (err) {
            // Si el error es de nuestras validaciones, respondemos 400 Bad Request
            if (err.message.includes('validación')) {
                return res.status(400).json({ error: err.message });
            }
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Coche creado con éxito', id: nuevoCoche.identificador });
    });
};
