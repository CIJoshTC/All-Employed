const mysql = require('mysql2/promise'); // Use of 'mysql2/promise'//
const pool = require('./connection'); // Importing the connection pool//

const { getAllDepartments, getAllEmployees, getAllRoles } = require('./queries');

async function main() {
    try {
        const departments = await getAllDepartments();
       
    } catch (error) {
        console.error('Main error:', error);
    }
}

main();

const inquirer = require('inquirer');

// Function to start the command-line application//
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
            case 'View all employees': 
                await viewAllEmployees();
                break;
            case 'View all roles': 
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
// Function to view all departments//
async function viewAllDepartments() {
    try {
        const departments = await getAllDepartments();
        console.table(departments);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
// Function to view all employees//
async function viewAllEmployees() {
    try {
        const employees = await getAllEmployees();
        console.table(employees);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

/////////Commented out to test later////////////////
//         const { employeeOption } = await inquirer.prompt({
//             name: 'employeeOption',
//             type: 'list',
//             message: 'What would you like to do next?',
//             choices: [
//                 'Add an employee',
//                 'Go back to main menu'
//             ]
//         });

//         switch (employeeOption) {
//             case 'Add an employee':
//                 await addEmployee();
//                 break;
//             case 'Go back to main menu':
//                 return; // This will take the user back to the main menu
//             default:
//                 console.log('Invalid choice. Please select a valid option.');
//         }
 
// //Function to add employees//
// async function addEmployee() {
//     const roles = await getAllRoles(); //
//     const roleChoices = roles.map(role => ({ name: role.title, value: role.id }));

//     const employeeData = await inquirer.prompt([
//         {
//             name: 'first_name',
//             type: 'input',
//             message: "Enter the employee's first name:"
//         },
//         {
//             name: 'last_name',
//             type: 'input',
//             message: "Enter the employee's last name:"
//         },
//         {
//             name: 'salary',
//             type: 'input',
//             message: "Enter the employee's salary:"
//         },
//         {
//             name: 'role_id',
//             type: 'list',
//             message: "Select the employee's role:",
//             choices: roleChoices
//         }
//     ]);

//     try {
//         await insertEmployee(employeeData); 
//         console.log('Employee added successfully!');
//     } catch (error) {
//         console.error('Error adding employee:', error.message);
//     }
// }

// Function to view all roles
async function viewAllRoles() {
    try {
        const roles = await getAllRoles();
        console.table(roles);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Calling of the startApp function to begin application
startApp();
