// employee constructor imported
const employee = require('./employee.js');

// employee constructor will be extended by the intern constructor
class intern extends employee {
    constructor (name, id, email, school) {

        // employee constructor
        super (name, id, email);
        this.school = school;
    }
    // this will return the job of the employee (intern)
    getJob () {
        return "intern";
    }
}

// this will export the intern constructor extension
module.exports = intern;
