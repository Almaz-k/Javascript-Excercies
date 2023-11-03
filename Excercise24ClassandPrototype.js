class Person{//parent
    constructor (
        firstName,
         lastName, 
         age,
         dob,
         ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age= age;
            this.dob= dob;
    }
    getfullName(){//combining the first and last name together as string
        //return this.firstName.concat("", this.lastName);
        return this.firstName +' ' +this.lastName;
    }
}
////class doctor extends Person{
////}
class student extends Person{//inherent child of the parent
    
    constructor (firstName, lastName,age,dob, studentId){
        super(firstName, lastName,age,dob);// super eleminates repetation of persons attribute/information(it comes from student information) individually
        this.studentId = studentId;
    }
    study(){
        return `student with this id is studying:${this.studentId}`;
    }
}

const john = new student('joe','jack', 68, '10/23/19907', '567stu');
 console.log(john.getfullName())
 console.log(john.study());
////class engineer extends Person {
////}

//const person1= new Person('joe', 'Doe',56);
//const person2 = new Person('Coe','Smith',34);