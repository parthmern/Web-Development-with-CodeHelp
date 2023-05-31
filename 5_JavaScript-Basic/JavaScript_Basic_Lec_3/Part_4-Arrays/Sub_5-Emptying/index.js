let array = [ 1,2,3,4,5,6];

//GARBAGE COLLECTOR can remove all the elements

let array2 = array ;

// array = [];

console.log(array);
console.log(array2);

//so this is not the proper way to delete / removing

array.length = 0 ; // WAY to do this 

//This is another way
// array.splice(0,array.length);

//we can also use LOOP here with array.pop() with condition of (array.length>0)

console.log(array);
console.log(array2);

