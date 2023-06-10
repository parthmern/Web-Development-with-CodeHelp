// PROMISE

// let meraPromise = new Promise (function(resolve,reject){
   
//     setTimeout ( function(){console.log("i am inside promise")},5000);

//     // resolve(1998);

//     reject(new Error('error agay fat gya'));
// });

// console.log("first");


// console.log(meraPromise);

//------------------------------------------------------------

let meraPromise1 = new Promise (function(resolve,reject){
   
    setTimeout ( function(){console.log("i am inside promise 1")},5000);

    // resolve(2) ;

    reject(new Error('error agay fat gya'));

});

meraPromise1.then((value)=> console.log(value)); 

meraPromise1.catch((error)=> console.log("received an error " ,error)); 


//---------------------------------------------------------

let waadaa1 = new Promise(function(resolve,reject){
    setTimeout(()=>console.log("set time out started"),2000);
    resolve(true);
})

let output = waadaa1.then(()=>{
    let waadaa2 = new Promise(function(resolve,reject){
        resolve("vaadaaa 2 resolved")
    })
    return waadaa2;
})

output.then((value)=>console.log(value));


