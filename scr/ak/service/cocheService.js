const cocheRepository = require('../repository/cocheRepository');

exports.consultarCoches = (callback) => {
    cocheRepository.findAll(callback);
};

exports.crearNuevoCoche = (coche, callback) => {
    const { identificador, marca, modelo, cilindrada } = coche;

    // 1. Validar campos obligatorios
    if (!identificador || !marca || !modelo) {
        return callback(new Error('Error de validación: Campos obligatorios vacíos'));
    }

    // 2. Validar cilindrada nula
    if (cilindrada === undefined || cilindrada === null) {
        return callback(new Error('Error de validación: Cilindrada nula'));
    }

    // 3. Validar cilindrada <= 0 (Punto 7 del PDF)
    if (parseInt(cilindrada) <= 0) {
        return callback(new Error(`Error de validación: Cilindrada inválida (${cilindrada}). Debe ser mayor que 0`));
    }

    // Si pasa todas las validaciones de negocio, guardamos en la base de datos
    cocheRepository.save(coche, callback);
};