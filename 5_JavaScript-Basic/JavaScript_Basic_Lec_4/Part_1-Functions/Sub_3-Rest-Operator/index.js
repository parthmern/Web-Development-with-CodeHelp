//making ARRAY of all arguments

function a(...args) {
    console.log(args);
}

a(1,2,3,4,56);

//-------------------

function b(num,value,num2,x,...args) {
    console.log(args);
}

b(5,6,2,8,9,6,2);


