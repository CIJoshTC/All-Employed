const mysql = require('mysql2/promise'); // Note the use of 'mysql2/promise'

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Use your actual MySQL username here
    password: 'root', // Use your actual MySQL password here
    database: 'employee_db'
});

module.exports = pool; // Export the pool for use in other modules