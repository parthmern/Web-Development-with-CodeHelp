let first = [1,2,3,4,5];
let second = [6,7,8,9,0];

//combine = spread operator

let combine = [...first, ...second];

console.log(combine);

let combine2 = [...first ,'a', ...second,'b'] ;

console.log(combine2);

let another = [...combine];

console.log(another);