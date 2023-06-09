//document Fragment

let fragment  = document.createDocumentFragment();

for ( let i = 1 ; i<= 100 ; i ++){

    let newElement = document.createElement('p');
    newElement.textContent = "this is para " + i ;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // 1 reflow and 1 repaint