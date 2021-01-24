const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

var teamArray = [];


// Prompt to gather info about manager
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team managers company id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team managers email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your team managers office number?',
        },

    ])
        .then(answers => {
            console.log(answers);
            const teamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamArray.push(teamMember);
            newTeamMember();
        });

};

// Allows the user to add more team members
const newTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another team member, or finish building your team?',
            choices: ['Add engineer', 'Add intern', 'No, my team is complete']
        },
    ])
        .then(answers => {
            switch (answers.addMember) {
                case 'Add engineer':
                    addEngineer();
                    break;

                case 'Add intern':
                    addIntern();
                    break;
                case "No, my team is complete":
                    fullTeam();
                    break
            }
        });

};

// Function for added new engineers
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineers company id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineers email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers Github username?',
        },
    ])
        .then(answers => {
            console.log(answers);
            const teamMember = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(teamMember);
            newTeamMember();
        });

};

// function for adding new interns
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your interns company id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your interns email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does your intern attend?',
        },
    ])
        .then(answers => {
            const teamMember = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(teamMember);
            newTeamMember();
        });

};


// Function to write team.html file 
function fullTeam() {
    fs.writeFile(outputPath, render(teamArray), (err) =>
        (err) ? console.error(err) : console.log('Your team is complete!!')
    );
}



// Function to initialize app
async function init() {
    try {
        const answers = await managerPrompt();

    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();









