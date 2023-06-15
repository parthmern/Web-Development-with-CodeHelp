const countValue = document.querySelector("#counter");
console.log(countValue);

const increment = () => {

    let value = parseInt(countValue.textContent) ;
    console.log(value);

    value = value + 1 ;

    console.log(value);

    countValue.textContent = value ;

};


const decrement = () => {

    let value = parseInt(countValue.innerHTML) ;
    console.log(value);

    value = value - 1 ;

    countValue.innerHTML = value ;

};
