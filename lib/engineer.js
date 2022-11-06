// employee constructor imported
const employee = require('./employee.js');

// employee constructor will be extended by the engineer constructor
class engineer extends employee {
    constructor (name, id, email, github) {

        // employee constructor
        super (name, id, email);
        this.github = github;
    }
    // this will return the job of the employee (engineer)
    getJob () {
        return "Engineer";
    }
}

// this will export the engineer constructor extension
module.exports = engineer;