//What to do? add greeting fucntion and newaddress to studnet object(Adding 2 methods).
// how to do? declear the two function inside teh studnet object
const student={
    name: 'Nohe',
    age:25,
    address:{
        street:'Russell',
        city: 'Salem',
        zipCode:'97233',
    }
}
console.log(`student.cty:${student.address.city}`);
console.log(`student city using []:${student['address']['city']}`);

//adding two objects for student greet and new address
//declearing two methods inside the studnet subject

student.greet= function(){
    console.log(`Selam my name is ${student.name}`);
}
// changing studnet address
student.changeAddress=(newStreet, newCity, newZipCode) =>{
    student.address.street= newStreet;
    student.address.city= newCity;
    student.address.zipCode=newZipCode;
}
let newStreet= 'Edsall';
let newCity='Alexanderia';
let newZipCode='23221';
student.greet();
student.changeAddress(newStreet,newCity,newZipCode);
console.log(`student city after modeification:${student.address.city}`);
console.log(`student city after modeification:${student.address.street}`);
console.log(`student city after modeification:${student.address.zipCode}`);
console.log(student.address);
