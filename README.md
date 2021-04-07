# profile-generator
![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
||||
|:-:|:-:|:-:|
|[Table Contents](#table-of-contents)|[Demo](#demo)|[Technologies Used](#technologies-used)
|[Description](#description)|[Work Involved](#work-involved)|[Code Snippet](#code-snippet)
|[Usage](#usage)|[Authors](#authors)|[Acknowledgments](#acknowledgments)

## Demo
Please check out a demo of this application here.
* [Demo](https://drive.google.com/file/d/1JHsCq0hlwEHyoYh7O2OduTIXa8kHjzez/view)
* [Tests](https://drive.google.com/file/d/1c2EleMVEDdQb6HWnxpyqQrFfjZ1Nbf1e/view)

## Technologies Used
||||
|:-:|:-:|:-:|
|Javascript		|inquirer |Jest	
|NodeJS	|Github |OOP

## Description
This application takes in information about employees and generates an HTML webpage that displays information about each employee. The employee types include managers, interns, and engineers, and for each employee you can upload their name, email, employee id, and more. 

## Work Involved
For this application, I utilized Inquirer in order to generate a prompt for the user to input information about the employees. The answers that the user added are then passed into a newly generated HTML file with all of the employee information displayed. 

## Code Snippet
* This code snippet shows how a new team member can be added.
```
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
```

## Usage
![How to use](./Develop/profile-use.png)

## License
This project is covered under MIT.

## Authors
**UC Berkeley Coding Bootcamp**

**Jessny Joseph** 

[Github](https://github.com/jessnyj) | [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
I would like to thank the mentors and colleagues who helped inspire and improve upon this project.