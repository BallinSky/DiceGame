
function Dicegame(){
    let p1dicenum = Math.floor((Math.random() * 6) + 1);
    if(p1dicenum === 1){
      document.getElementById("p1dice").src = "image/P1dice-1.png";
    }
    if(p1dicenum === 2){
      document.getElementById("p1dice").src = "image/P1dice-2.png";
    }
    if(p1dicenum === 3){
      document.getElementById("p1dice").src = "image/P1dice-3.png";
    }
    if(p1dicenum === 4){
      document.getElementById("p1dice").src = "image/P1dice-4.png";
    }
    if(p1dicenum === 5){
      document.getElementById("p1dice").src = "image/P1dice-5.png";
    }
    if(p1dicenum === 6){
      document.getElementById("p1dice").src = "image/P1dice-6.png";
    }
    let p2dicenum = Math.floor((Math.random() * 6) + 1);
    if(p2dicenum === 1){
      document.getElementById("p2dice").src = "image/P2dice-1.png";
    }
    if(p2dicenum === 2){
      document.getElementById("p2dice").src = "image/P2dice-2.png";
    }
    if(p2dicenum === 3){
      document.getElementById("p2dice").src = "image/P2dice-3.png";
    }
    if(p2dicenum === 4){
      document.getElementById("p2dice").src = "image/P2dice-4.png";
    }
    if(p2dicenum === 5){
      document.getElementById("p2dice").src = "image/P2dice-5.png";
    }
    if(p2dicenum === 6){
      document.getElementById("p2dice").src = "image/P2dice-6.png";
    }
    if (p1dicenum > p2dicenum) {
      document.querySelector("h1").innerHTML = "Player 1 WIN!!";
    }
    else if (p2dicenum > p1dicenum) {
      document.querySelector("h1").innerHTML = "Player 2 WIN!!";
    }
    else {
      document.querySelector("h1").innerHTML = "DRAW!!";
    }
}
