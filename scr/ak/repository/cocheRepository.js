const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Configuración de la conexión usando variables de entorno
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'concesionario_ak'
});

const cocheRepository = {
    // Busca coches por marca (RA1)
    async findByMarca(marca) {
        const [rows] = await pool.query('SELECT * FROM T_COCHE WHERE marca = ?', [marca]);
        return rows; // Retorna la lista de coches filtrados [cite: 104]
    },

    // Guarda un nuevo coche (RA1)
    async save(coche) {
        const { identificador, marca, modelo, cilindrada } = coche;
        await pool.query(
            'INSERT INTO T_COCHE (identificador, marca, modelo, cilindrada) VALUES (?, ?, ?, ?)',
            [identificador, marca, modelo, cilindrada]
        );
        return coche;
    }
};

module.exports = cocheRepository;