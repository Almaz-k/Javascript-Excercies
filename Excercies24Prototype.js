function person (firstName,lastName,age){// any function takes paramters,here fristName,lastName,age are the parameters.
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;

}
person.prototype.greet= function (firstName){ //if was => isnot function rather anonymous variable
    return`Hello ${this.firstName}`;
}

const John = new person ('Berhe','Lilay',56);
John.greet();
console.log(John.greet());