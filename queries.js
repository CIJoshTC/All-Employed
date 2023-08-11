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

async function insertEmployee(employeeData) {
    try {
        const query = `
            INSERT INTO employees (first_name, last_name, salary, role_id, 'manager_id')
            VALUES (?, ?, ?, ?)
        `;
        const values = [
            employeeData.first_name,
            employeeData.last_name,
            employeeData.salary,
            employeeData.role_id
        ];

        const [result] = await pool.query(query, values);
        return result;
    } catch (error) {
        console.error('Error inserting employee:', error);
        throw error;
    }
}

module.exports = {
    getAllDepartments,
    getAllEmployees,
    getAllRoles,
    insertEmployee
};
