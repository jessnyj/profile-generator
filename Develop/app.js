const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

var globalAnswers;
var teamArray = [];


// Prompt to gather info about team members
const managerPrompt = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team managers name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team managers email address?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team managers company id?',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your team managers office number?',
        },
       
    ])
    .then(answers => {
        const teamMember = new Manager(answers);
        teamArray.push(teamMember)
        newTeamMember();
    });

}

const newTeamMember = () => { 
    return inquirer.prompt([
        {
            type: 'List',
            name: 'addMember',
            message: 'Would you like to add another team member, or finish building your team?',
            choices: ['Add engineer', 'Add intern', 'No, my team is complete.']
        },
    ])
    .then(answers => {



















// Prompt to gather info about team members
// const employeePrompt = () => { 
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?',
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email address?',
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is your company id?',
//         },
//         {
//             type: 'list',
//             name: 'role',
//             message: 'What is your title of your role in the company?',
//             choices: ['Manager', 'Engineer', 'Intern'],
//         },
//     ])
//         .then(answers => {
//             globalAnswers = answers;
//             if (answers.role === 'Manager') {
//                 return inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'officeNum',
//                         message: 'What is your office number?',
//                     }
//                 ])
//             }
//             if (answers.role === 'Engineer') {
//                 return inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'github',
//                         message: 'What is your Github username?',
//                     }
//                 ])
//             }
//             if (answers.role === 'Intern') {
//                 return inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'school',
//                         message: 'What school do you go to?',
//                     }
//                 ])
//             }
        
//         })
//         .then(answers2 => {
//         let fullAnswers = {
//             ...globalAnswers,
//             ...answers2
//         };
//         console.log(fullAnswers);
//         })

// };
// employeePrompt();

// using full answers to use manger classes 


// Render Function???


// make an empty array
// push full answers to new array
// call render function by passing new array as parameter
// use fs.write file to team.html
// mail to option in w3 schools


// usingAnswers => (newArray) {
//     push(fullAnswers).newArray;
//     render();
// }

// usingAnswers();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
