// Analysis 
// use for loop becuse numbers/situation are known
// for our case we use while loop cuse the end of the numbers are not defined
//10 +ve even number : if we divide the number by two and the reminder is zero.
// how to achive it in JavaScript: use operators % 10%2 ==0
for(let i=2;i<=20;i++){
    if(i%2==0){
        console.log(`number sequence:${i}`);
    }
}

// While loop
let i=2
let tenFirstPositiveNumberCounter =0;
while(tenFirstPositiveNumberCounter<10){
    if (i%2==0){
        tenFirstPositiveNumberCounter++
        console.log(`number sequence from while lopp:${i}`)
    }
    i++;
}