let testScore= 98;
if (testScore>=90 && testScore <=100){
    grade = `A`;
} else if (testScore>=80 && testScore <90){
    grade= `B`
} else if ( testScore >=70 && testScore <80){
    grade= `C`
} else if( testScore >=60 && testScore <70){
    grade= `D`
} else {
    grade= `F`
}

console.log(`Studen's Test Score: ${testScore}`);
console.log(`Assigned Grade:${grade}`);
