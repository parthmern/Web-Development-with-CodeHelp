//begin
//middle
//end

let a =[1,2,3,4];


console.log(a);

//END -

a.push(7);

//Begin

a.unshift(8);

//midddle

a.splice(2,0,'a','b','c');

console.log(a);

//searching

console.log(a.indexOf(2));
console.log(a.indexOf(23)); //if not available the index then RETURNS the answer -1

//checking that the nuber exists in the array or not

if(a.indexOf(23) != -1){
    console.log('present');
}
else{
    console.log('notpresent')
}

//or

let x = a.includes(2);
console.log(x);

console.log(a.includes(9));

//