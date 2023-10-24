//what to do? delay a meesage
//how to do it? using setTimeout 

function delayedMessage (delay) {
    setTimeout(function(){
        console.log('delayed message');
    },delay)
}

delayedMessage(5000);

// Count Timers
//what to do ? implement countdown timer
//how to do ? using setInterval function

let timer;
function countdownTimer(count){
    const timer = setInterval(function(){
        count--;   
        if(count==0){
            console.log("Time's up");
            clearInterval(timer);// to stop the count down at exactly 5 or 1 minute 
        }       
    }, 1000)
}

countdownTimer(5);
