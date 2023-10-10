 //Analysis
 //additon,subtraction,multiplication, division,
 function add (a,b){
    if(isNaN(a)|| isNaN(b)){
        return;
    }
    return a+b;
}
 const subtract=(a,b)=>{
    if(isNaN(a)|| isNaN(b)){
        return;
    }
    return a-b;
}
 const multiply=(a,b)=>{
    if(isNaN(a)|| isNaN(b)){
        return 'invalid data';
    }
    return a*b;
}
 const divide= function(a,b){
    if(isNaN(a)|| isNaN(b)){
        return 'invalid data';
 }
 return a/b;
};

 console.log(`additon result:${add (3,4)}`);
 console.log(`additon result:${subtract(3,4)}`); 
 console.log(`additon result:${multiply(3,4)}`);
 console.log(`additon result:${divide(3,4)}`);


 