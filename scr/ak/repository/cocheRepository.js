const mysql = require('mysql2');

// Pool de conexiones a MySQL (conecta al contenedor 'db')
const db = mysql.createPool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'concesionario_ak',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Obtener todos los coches
exports.findAll = (callback) => {
    db.query('SELECT * FROM T_COCHE', callback);
};

// Guardar un nuevo coche
exports.save = (coche, callback) => {
    const { identificador, marca, modelo, cilindrada } = coche;
    const sql = 'INSERT INTO T_COCHE (identificador, marca, modelo, cilindrada) VALUES (?, ?, ?, ?)';
    db.query(sql, [identificador, marca, modelo, cilindrada], callback);
};