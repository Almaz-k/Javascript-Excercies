//what to do? to validat email taking an email address
//how to do? passing the call back function in another function

const printEmail =(isValid)=>{
    isValid?console.log(`email  is valid`):console.log(` email is invalid`);
} // (?) works as condutional if /else, is tertiary condutional function
function validateEmail(email, callback){
    let at = email.includes('@');
    let dot = email.includes('.'); 
    at&&dot? callback(true):callback(false);
    if(at && dot){
        callback(true);
    } else {
        callback(false);
    }
}
validateEmail('nnkidane@gmail.com', printEmail);
validateEmail('nnkidane@gmailcom', printEmail);
