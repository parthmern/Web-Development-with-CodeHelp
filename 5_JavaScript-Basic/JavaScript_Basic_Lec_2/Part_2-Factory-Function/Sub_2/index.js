//FACTORY FUNCTION
console.log('FACTORY FUNCTION');

function createRectangle(len,bred) {

    let rectangle = {

        //properties
    
        length : len ,
        breadth : bred ,

        total : (len + bred) ,
    
        //Behavior of "draw" as FUNCTION
    
        draw(){
            console.log('draw as behavioural function');
        }
    
    };

    return rectangle;
}

//calling the function "createRectangle"

let rectangleobj1 = createRectangle(2,3) ; 

let rectangleobj2 = createRectangle(3,5) ; 