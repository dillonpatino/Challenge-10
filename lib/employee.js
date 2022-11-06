// this will create the constructor for the employee profile
class employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // this will return the name from the input
    getName () {
        return this.name;
    }
    // this will return the ID from the input
    getId () {
        return this.id;
    }
    // this will return the email address from the input
    getEmail () {
        return this.email;
    }
    // this will return the job of the employee
    getJob () {
        return 'employee';
    }
};

// this will export the employee constructor
module.exports = employee;