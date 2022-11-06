// link to generate the HTML
const generatePage = require('./src/generateHTML.js');

// packages necessary from node modules
const fs = require('fs');
const inquirer = require('inquirer');

// employee profiles from lib
const manager = require('./lib/manager.js')
const engineer = require('./lib/engineer.js')
const intern = require('./lib/intern.js')
// array of the team
const team = [];

// manager question prompts via inquirer
const addManager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'Who is the manager of the team?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then(managerInput => {
        const { managerName, managerId, managerEmail, managerOfficeNumber } = managerInput;
        const Manager = new manager (managerName, managerId, managerEmail, managerOfficeNumber);
        team.push(Manager);
    })
};

// function that will generate the HTML page using the File System
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, error => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log("Your new team page has been generated successfully!")
        }
    })
};

// calls on the question prompts
addManager()
.then(team => {
    return generatePage(team);
})
.then(HTML => {
    return writeFile(HTML);
});


