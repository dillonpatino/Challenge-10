const employee = require("../lib/employee");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");

// generating the team
const generateMyTeam = myTeam => {

    // generating the manager card
    const generateManager = manager => {
        return `<div class="card employee-card">
                    <div class="card-header bg-primary text-white">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"><i class="fa-light fa-mug-hot"></i>${manager.getJob()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`;
    };

    // generating the engineer card
    const generateEngineer = engineer => {
        return `<div class="card employee-card">
                    <div class="card-header bg-primary text-white">
                            <h2 class="card-title">${engineer.getName()}</h2>
                            <h3 class="card-title"><i class="fa-thin fa-glasses"></i>${engineer.getJob()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank"> ${engineer.getGithub()} </a></li>
                        </ul>
                    </div>
                </div>`;
    };

    // generating the intern card
    const generateIntern = intern => {
        return `<div class="card employee-card">
                    <div class="card-header bg-primary text-white">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title"><i class="fa-thin fa-user-graduate"></i>${intern.getJob()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>`;
    };

    // array that will be populated by all employees and brings all cards together to form the actual page
    const page = [];
    page.push(myTeam
        .filter(employee => employee.getJob() === "Manager")
        .map(manager => generateManager(manager))
        );
    page.push(myTeam
        .filter(employee => employee.getJob() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
        );
    page.push(myTeam
        .filter(employee => employee.getJob() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
        );    
    return page.join("");
    }

// this will export the function that will generate the whole page
module.exports = myTeam => {
    return `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>My Team</title>
                    <link rel="stylesheet" href="style.css">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <script src="https://kit.fontawesome.com/02ad37c479.js" crossorigin="anonymous"></script>
                </head>
                <body>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                                <h1 class="text-center text-white">My Team</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="row team-area col-12 d-flex justify-content-center">
                                ${generateMyTeam(myTeam)}
                            </div>
                        </div>
                    </div>
                </body>
            </html>`;
};   