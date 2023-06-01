//function= a block of code that fulfils the specific task
// we are using it multipletimes by calling it -- Reusability

//1) declaration

function run(){
    console.log('running');
}

run();

//HOISTING - process of moving function declaration to the top of file this is automatic by JS engine
// all the declared function move automatically to the top

//-------------------------------------------------------
//2) function ASSIGNMENT

//A)Named f. assignment

let a  = function walk(){
    console.log('walking');
}

console.log(a);

a();

//b)Anonymus f. assignment

let b  = function (){
    console.log('walking anonymus');
}

b();

//Not applicable Hoisting on f. assignment