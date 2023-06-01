function sum(a,b){
    let c = a + b ; 

    console.log(arguments); //argument that we are giving that is OBJECT

    return c ;

};

// let d = sum(1,2);

let d = sum(1,2,5,6,8);

console.log(d);

//-----------
function sum2(a,b){

    let total = 0;

    for(let value of arguments)

    total = total + value ;

    return total ;

};

let x = sum2(1,2,3,4,5);

console.log(x);
    