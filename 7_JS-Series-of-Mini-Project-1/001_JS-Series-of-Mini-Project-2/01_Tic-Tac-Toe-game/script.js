const boxes = document.querySelectorAll('.box');
console.log(boxes); // array like object not the array

const gameInfo = document.querySelector('.game-info');
const newGameBtn = document.querySelector('.btn');

//current player
let currentPlayer ;
let gameGrid ; 

//there are 8 ways to win this
const winningPosition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//function that initialize the game

function initGame(){

    currentPlayer = "X" ;
    gameGrid = ["","","","","","","","",""];

    //UI par sabhi box ko empty

    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all" ;
        // EXXXXTRA -- wo blue box ko hatana
        box.classList.remove("win");
    })

    newGameBtn.classList.remove("active");

    gameInfo.innerText = `Current Player = ${currentPlayer}` ; 

}

initGame();

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
})
// FUNCTION --> handleClick(index)
// 1) pehle jis bhi box par click kare uska index mil jayega
// 2) jo bhi box par click hua usko check karo wo EMPTY hai na
// 3) Empty box me value dal do
// 4) us box ko UNCLICKABLE kar do
// 5) change CURRENTPLAYER ( X <--> O )
// 6) check WINNER

function swapTurn(){
    
    console.log("swap func working");

    if(currentPlayer == "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X"
    }

    //UI update
    gameInfo.innerText = `Current Player = ${currentPlayer}` ; 
}

function checkGameOver(){
    // check winner

    let answer = "";

    winningPosition.forEach((position)=>{

        if( 
            (gameGrid[ position[0] ] !== "" || gameGrid[ position[1] ] !== "" || gameGrid[ position[2] ] !== "")
            && (gameGrid[ position[0] ] === gameGrid[ position[1] ] ) &&  (gameGrid[ position[1] ] === gameGrid[ position[2] ] ) 
            ){
                console.log(position);
                console.log(position[0] , position[1] , position[2]);
                console.log(gameGrid[ position[0] ] , gameGrid[ position[1]],gameGrid[ position[2] ]);

                if(gameGrid[position[0]] === "X"){
                    answer = "X";
                }
                else{
                    answer = "O";
                }

                // if we get winner then disable pointer events -- matlab ab click he nhi hoga

                boxes.forEach((box)=>{
                    box.style.pointerEvents = "none";
                })


                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
            }

    })

    // after doing this -- we got the winner or draw

    if(answer !== ""){
        gameInfo.innerText = `WINNER PLAYER = ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }
    
    let fillCount = 0 ;
    gameGrid.forEach((box)=>{
        if(box !== ""){
            fillCount ++;
        }
    })

    if(fillCount === 9){
        gameInfo.innerText = `GAME TIED(DRAW)`;
        newGameBtn.classList.add("active");
    }


}


function handleClick(index){

    if(gameGrid[index] == ""){
        boxes[index].innerHTML = currentPlayer ; // change in UI
        gameGrid[index] = currentPlayer; // change in inner logic
        boxes[index].style.pointerEvents = "none" ;

        swapTurn(); // swap currentplayer
        checkGameOver(); // check winner
    }
}


newGameBtn.addEventListener('click',initGame);