const mysql = require('mysql2/promise'); // Using 'mysql2/promise' for async/await support
require('dotenv').config(); // Load environment variables from .env

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'book_shorts',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection
async function testDbConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to the MySQL database!');
        connection.release(); // Release the connection back to the pool
    } catch (error) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1); // Exit the process if unable to connect
    }
}

testDbConnection();

module.exports = pool;