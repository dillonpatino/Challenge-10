// employee constructor imported
const employee = require('./employee.js');

// employee constructor will be extended by the manager constructor
class manager extends employee {
    constructor (name, id, email, officeNumber) {

        // employee constructor
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    // this will return the job of the employee (manager)
    getJob () {
        return "Manager";
    }
}

// this will export the manager constructor extension
module.exports = manager;
