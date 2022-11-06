// employee constructor import
const employee = require('./employee.js');

// employee constructor will be extended by the manager constructor
class manager extends employee {
    constructor (name, id, email, officeNumber) {

        // employee constructor
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    //
    getJob () {
        return "Manager";
    }
}

//
module.exports = manager;
