//what to do? to delay a message 
//how to do ?  using promise with setTimeout

const simplePromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("my message to the clients");
    }, 2000);
});

simplePromise
.then(promiseresult =>{
    return promiseresult;
}).then(message =>{
    console.log(message);
})
.catch(error =>{
    console.error(error);
})