function Rectangle(len,bread) {

    this.length = len ; 
    this.breadth = bread ;

    this.draw=function(){
        console.log('drawing');
    }

}
   
let rectangleobj1 = new Rectangle(1,2) ; 

let rectangleobj2 = new Rectangle(3,5) ; 

