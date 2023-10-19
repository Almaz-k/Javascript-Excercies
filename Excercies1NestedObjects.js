//what to do?cerating student object
//how to do ? use const studnet to define character and address as method/behovior

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
