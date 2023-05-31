let a = [10,20,30,40];

//iteartion using FOR-OF loop

for(let value of a){
    console.log(value);
}

//FOR-EACH loop

a.forEach(number => {
    console.log(number);
});

a.forEach(function(number) {
    console.log(number);
});