const cocheRepository = require('../repository/cocheRepository');

const cocheService = {
    async consultarCochesPorMarca(marca) {
        // Si no viene marca o es inválida, devolvemos lista vacía [cite: 281]
        if (!marca) return [];
        return await cocheRepository.findByMarca(marca);
    },

    async crearNuevoCoche(coche) {
        // VALIDACIÓN CRÍTICA: Cilindrada > 0 [cite: 236, 296]
        if (!coche.cilindrada || coche.cilindrada <= 0) {
            throw new Error('VALIDATION_ERROR: La cilindrada debe ser mayor que 0');
        }
        // Validación de campos obligatorios [cite: 105, 271]
        if (!coche.identificador || !coche.marca || !coche.modelo) {
            throw new Error('VALIDATION_ERROR: Faltan campos obligatorios');
        }
        
        return await cocheRepository.save(coche);
    }
};

module.exports = cocheService;