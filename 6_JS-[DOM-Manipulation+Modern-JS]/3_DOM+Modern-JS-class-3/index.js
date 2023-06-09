//adding 100 para

const t1 = performance.now();

for( let i = 1 ; i <= 100 ; i++){

    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i ;
    
    document.body.appendChild(newElement);

}

const t2 = performance.now();
console.log("time differenece or this took = ", (t2-t1) , "ms");

//optimizing a bit

const t3 = performance.now();

let myDiv = document.createElement('div');

for (  let j = 1 ; j <= 100 ; j++){
    let element = document.createElement('p');
    element.textContent = 'this is para' + j ;

    document.appendChild(element);
}

document.body.appendChild(myDiv);

const t4 = performance.now();
console.log("time differenece or this took = ", (t4-t3) , "ms");