let src = {a:1,b:2,c:3};

let dest = {};

// ITERATION
for(let key in src){
    dest[key] = src[key];
}

console.log(src);
console.log(dest);

//ASSIGN
console.log('----------------------------------');

let src1 = {d:4,e:5,f:6};

let dest1 = Object.assign ( {}, src1 );

console.log(src1);
console.log(dest1);

let dest2multiple = Object.assign ( {}, src1, src );

console.log(dest2multiple);

//SPREAD
console.log('----------------------------------');

let dest4 = {...src};

console.log(dest4);
