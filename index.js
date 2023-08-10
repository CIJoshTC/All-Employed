const mysql = require('mysql2/promise'); // Note the use of 'mysql2/promise'
const pool = require('./connection'); // Import the connection pool

module.exports = pool; // Export the pool for use in other modules


const { getAllDepartments, getAllEmployees, getAllRoles } = require('./queries');

async function main() {
    try {
        const departments = await getAllDepartments();
        console.log(departments);
    } catch (error) {
        console.error('Main error:', error);
    }
}

main();

const inquirer = require('inquirer');

// Function to start the command-line application
async function startApp() {
    while (true) {
        const { choice } = await inquirer.prompt({
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all employees',
                'View all roles',
                'Exit'
            ]
        });

        switch (choice) {
            case 'View all departments':
                await viewAllDepartments();
                break;
            case 'View all employees': // Handle this case
                await viewAllEmployees();
                break;
            case 'View all roles': // Handle this case
                await viewAllRoles();
                break;
            case 'Exit':
                console.log('Exiting application.');
                process.exit();
            default:
                console.log('Invalid choice. Please select a valid option.');
        }
    }
}
// Function to view all departments
async function viewAllDepartments() {
    try {
        const departments = await getAllDepartments();
        console.table(departments);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
async function viewAllEmployees() {
    try {
        const employees = await getAllEmployees();
        console.table(employees);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to view all roles
async function viewAllRoles() {
    try {
        const roles = await getAllRoles();
        console.table(roles);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the startApp function to begin the application
startApp();
