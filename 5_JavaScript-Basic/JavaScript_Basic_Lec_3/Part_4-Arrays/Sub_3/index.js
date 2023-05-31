//objects in array
let array = [ {no:1,name:'parth'},{no:2,name:'rahul'} ];

console.log(array);

let y = array.indexOf({no:1,name:'parth'}); 

console.log(y); 

let z = array.find( function(array) { return array.name == 'parth'; } );

console.log(z); 

let ze = array.find( function(array) { return array.name == 'kelish'; } );

console.log(ze); 

//ARROW function can make it short one type of shorthand notation

let zep = array.find( array => array.name === 'kelish' );

console.log(zep); 

let array2 = [ 1, 2,3,4,5,6];
console.log(array2);