const pool = require('./connection'); // Import the connection pool

// Example function to retrieve all departments using Promises
async function getAllDepartments() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM department');
        return rows;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw error;
    }
}

// Add more query functions as needed
module.exports = {
    getAllDepartments
    // Add more exported functions here
};