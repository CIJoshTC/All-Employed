const mysql = require('mysql2/promise'); // Note the use of 'mysql2/promise'

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'employee_db'
});

module.exports = pool; // Export the pool for use in other modules


const { getAllDepartments } = require('./queries');

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
                // Add more choices for other functionalities
                'Exit'
            ]
        });

        switch (choice) {
            case 'View all departments':
                await viewAllDepartments();
                break;
            // Handle other cases for different functionalities
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

// Call the startApp function to begin the application
startApp();
