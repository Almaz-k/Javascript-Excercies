//Analysis
//use console.errorr instead of console.log, becuse we intend to print the undefined data as wrong.

let numericDay = 8;
let nameofDay;
switch(numericDay){
    case 1:
        nameofDay ='Moday';
     break;
 case 2:
      nameofDay='Tuesday';
      brake;
 case 3:
    nameofDay='Wednesday';
    break;
 case 4:
    nameofDay= 'Thursday';
    break;
 case 5:
    nameofDay='Friday';
    break;
 case 6:
    nameofDay='Saturday';
    break;
 case 7:
    nameofDay='Sunday';
    brak;
 default:
    console.error('wrong input for the week days try again');
}
if (nameofDay <=7 && numericDay >=1){
    console.log(`
    day of the week: ${nameofDay}
    input day: ${nameofDay}`);
} 



