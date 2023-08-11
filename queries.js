const mysql = require('mysql2/promise');
const pool = require('./connection'); // Import the connection pool

// Example function to retrieve all departments using Promises
async function getAllDepartments() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM departments');
        return rows;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw error;
    }
}
// Function to retrieve all employees using Promises
async function getAllEmployees() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM employees');
        return rows;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
}
async function getAllRoles() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM roles');
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        throw error;
    }
}

// Add more query functions as needed
module.exports = {
    getAllDepartments,
    getAllEmployees,
    getAllRoles
    // Add more exported functions here
};