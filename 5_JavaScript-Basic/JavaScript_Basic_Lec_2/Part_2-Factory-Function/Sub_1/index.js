//creating the object(variables are interlinked with eachother like length and breadth) of rectangle

let rectangle = {

    //properties

    length : 1 ,
    breadth : 2 ,

    //Behavior of "draw" as FUNCTION

    draw(){
        console.log('draw as behavioural function');
    }

};

// -----------------------
//FACTORY FUNCTION
console.log('FACTORY FUNCTION');

function createRectangle() {

    let rectangle = {

        //properties
    
        length : 1 ,
        breadth : 2 ,
    
        //Behavior of "draw" as FUNCTION
    
        draw(){
            console.log('draw as behavioural function');
        }
    
    };

    return rectangle;
}

//calling the function "createRectangle"

let rectangleobj1 = createRectangle() ; 