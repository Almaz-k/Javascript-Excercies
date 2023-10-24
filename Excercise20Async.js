//what to do? to implment callback
//how to do? passing one functio as a parameter to anothr function

//const add =(result) =>{
    //return result;// if i am working only on sum.
//}
const sub = (number1, number2)=>{
    console.log(`sub:${number1-number2}`);
}
function sum(number1, number2, callback){
    if (isNaN(number1)|| isNaN(number2)){
        return;
    }    
    callback(number1, number2);
    let sum =number1 + number2;
    console.log(`sum:${sum}`);
    //return callback(sum);
}
sum(-1,-3,sub)
//console.log(`summation result:${sum(-1, -3,add)}`); 