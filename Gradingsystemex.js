let testScore = 90;
let Grade= 'F';
while(testScore>=50 && testScore <=100){
    if (testScore>=90 && testScore <=100){
        Grade='A';
    }else if (testScore >=80 && testScore<=89){
        Grade='B';
    }else if (testScore >=70 && testScore <=79){
        Grade='C'; 
    }else if (testScore >=60 && testScore <=69){
        Grade='D';
    } else{
        Grade='F';
    }
console.log(
    `test score=${testScore}
    grade:"${Grade}`);
    testScore-=10;
};

