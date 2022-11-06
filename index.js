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
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const Manager = new manager (name, id, email, officeNumber);
        team.push(Manager);
    })
};

// question prompts for employees via inquirer
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'job',
            message: "What is the employee's job?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's Github username?",
            when: (input) => input.job === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the employee attend?",
            when: (input) => input.job === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmEmployee', 
            message: 'Do you need to add another employee?',
            default: false
        }
    ])

    .then(employeeData => {
        let { name, id, email, job, github, school, confirmEmployee } = employeeData;
        let employee;
        if (job === "Engineer") {
            employee = new engineer (name, id, email, github);
        } else if (job === "Intern") {
            employee = new intern (name, id, email, school);
        }
        team.push(employee);
        if (confirmEmployee) {
            return addEmployee(team);
        } else {
            return team;
        }
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
    .then(addEmployee)
    .then(team => {
        return generatePage(team);
    })
    .then(HTML => {
        return writeFile(HTML);
    });


