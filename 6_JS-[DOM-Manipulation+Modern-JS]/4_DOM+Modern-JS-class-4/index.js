//example of synchronous -- line by line execution

function sync(){
    console.log("first");
}

sync();

console.log("second");
//OUTPUT - first - second

//-----------------------------------------------
//example of Asynchronous (ex.setTimeout,.eventListner)

setTimeout(function(){console.log("third")},3000);

function async(){
    console.log("first");
}

async();

console.log("second");
//OUTPUT - first - second -third






