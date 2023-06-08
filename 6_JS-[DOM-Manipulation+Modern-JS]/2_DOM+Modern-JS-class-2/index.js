let x = document.getElementsByClassName('para');

document.addEventListener('click',()=>{alert("i am parht");});

//document.addEventListener('click', print);

//-------------------------

function print(){
    alert("i am parht");
};

document.removeEventListener('click', print);

//the event object

const y = document.getElementById('wrapper');

y.addEventListener('click', function(event){
    console.log(event);
})


//the default action prevention

let allLinks = document.querySelectorAll('a');
let thirdLink = allLinks[2]; 

thirdLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log("maja aya tu open nhi kr payega");
});


//avoid too many events

let myDiv = document.createElement('div');

for(let i=1 ; i<=5 ; i ++){
    let newElement = document.createElement('p');
    newElement.textContent = "paragraph"+ i ;

    newElement.addEventListener('click',function(event){
        console.log("i have clicked bruh");
    });

    myDiv.appendChild(newElement);

}

document.body.appendChild(myDiv);


