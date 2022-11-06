// link to generate the HTML
const generatePage = require('./src/generateHTML.js');

// packages necessary from node modules
const fs = require('fs');
const inquirer = require('inquirer');

// employee profiles from lib
const manager = require('./lib/manager.js')
const engineer = require('./lib/engineer.js')
const intern = require('./lib/intern.js')


