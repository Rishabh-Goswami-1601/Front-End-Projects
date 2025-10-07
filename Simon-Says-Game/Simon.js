let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false ;

let btns = [ "red" , "green" , "yellow" , "purple" ];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if ( started == false ){
        // console.log("game started");
        started = true ;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    } , 250 );
}

function levelUp(){
    userSeq = [] ; 
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx){

    if ( userSeq[idx] == gameSeq[idx] ){
        // console.log("same value");
        if( userSeq.length == gameSeq.length ){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>  <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        } , 250 );
        reset();
    }

}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor); 

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for ( let btn of allBtns ){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started = false ;
    level = 0;
    gameSeq = [] ;
    userSeq = [] ;
}
