////let testScore=90;// only one score, but if you want to store 10 students score?
let testScore=[95,85,76,65];// using array for multiple scores. used to store similar dataset in same variable.

// while (true){
// console.log(`am running forever!`);
//} 
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

