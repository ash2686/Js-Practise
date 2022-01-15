let cards = document.querySelectorAll(".blocks");
let mainScreen = document.getElementsByClassName("main-container")[0];
let topText = document.getElementsByClassName("top-text")[0];
let mainDisplay = document.getElementsByClassName("main-display")[0];
let winner = document.getElementById("winner");
let gameTimer = document.getElementById("game-timer");
let pic, card, rand;
let finals = [];
const count = 10;
const max = 9;
let crds = [];
let clcks = [];
let checkGame = [];
let doneCards = [];

let interval;
let secs = 0;
let mins = 0;
let timerFlag = 0;
let num;
let a;



for (let k = 0; k < 1000; k++) {
  rand = Math.round(Math.random() * max);
  if (!finals.includes(rand))
    finals.push(rand);
}
finals = finals.slice(0, count)
setupCards();
gameLogic();

function setupCards() {
  for (let i = 0; i < finals.length; i++) {
    cards[i].style.backgroundImage = `url(images/${finals[i]}.jpg)`;
    cards[i].style.backgroundImage = "url(images/backNew2.jpeg)";
  }
}

function gameLogic() {

  let flag = 0;

  setTimeout(() => {
    mainScreen.classList.remove("matchEffect");
  }, 1000);

  for (let j = 0; j < 10; j++) {cards[j].classList.remove("noclick");}
 
  for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
                                          if(timerFlag===0){
                                            gameTime();
                                            timerFlag++;
                                          }
                                          cards[i].style.transform = "rotateY(180deg)";
                                          // cards[i].style.animation = "flipCard 2s";
                                          
                                                    setTimeout(() => {
                                                      cards[i].style.border = "2px solid white";
                                                      cards[i].style.backgroundImage = `url(images/${finals[i]}.jpg)`;
                                                    }, 540)
                                          // cards[i].style.border = "5px solid white";
                                          // cards[i].style.backgroundImage = `url(images/${finals[i]}.jpg)`;

                                            if (flag === 1) {
                                             for (let j = 0; j < 10; j++) {cards[j].classList.add("noclick");}

                                            setTimeout(() => { flip(i, crds, clcks, interval) }, 1000);
                                          }
                                          crds[flag] = finals[i];
                                          clcks[flag] = i;
                                          flag++;
    });
  }
}

function flip(i, crds, clcks, interval) {
  let a = crds[0];
  let b = crds[1];
  if (a > 4) { a = a - 5; };
  if (b < 5) { b = b + 5; };

  cards[clcks[0]].style.border = "1px solid black";
  cards[clcks[1]].style.border = "1px solid black";


  if (finals[a] === finals[b - 5]) {
                                    cards[clcks[0]].style.backgroundImage = "none";
                                    cards[clcks[1]].style.backgroundImage = "none";
                                    checkGame.push(clcks[0], clcks[1]);
                                    cards[clcks[0]].style.backgroundColor = "transparent";
                                    cards[clcks[1]].style.backgroundColor = "transparent";
                                    cards[clcks[0]].style.border = "none";
                                    cards[clcks[1]].style.border = "none";
                                    cards[clcks[0]].classList.add("noclick1");
                                    cards[clcks[1]].classList.add("noclick1");

                                    console.log("check this" + cards[clcks[0]],cards[clcks[1]]);

                                    matchAnimation();


                                    if (checkGame.length === 10) {
                                                                  clearInterval(interval);
                                                                  mainScreen.style.animation="start .5s infinite"
                                                                  console.log("Game Time: " + gameTimer.innerHTML);
                                                                  mainScreen.style.backgroundImage = "url(images/bg.jpg)";
                                                                  topText.style.display = "none";
                                                                  mainDisplay.style.display = "none";
                                                                  gameTimer.style.backgroundColor = "transparent";
                                                                  gameTimer.style.marginBottom = "10rem";
                                                                  winner.style.display = "block";
                                                                  winner.style.marginTop = "7rem";
                                                                  winner.innerHTML = "Good Stuff, keep it up";
                                                                  // gameTimer.style.color = "black";
                                                                  // gameTimer.innerHTML= "Good Stuff";

                                                                  gameTimer.innerHTML = `Took you ${mins} mins ${secs} secs`;

                                    }

  } 
  
  
  else {
        for (x = 0; x < 2; x++) {
          cards[clcks[x]].style.transform = "rotateY(360deg)";
          // cards[clcks[x]].style.backgroundImage = "url(images/backNew1.jpeg)";
         
          reverseCard(clcks,x);
          // setTimeout(() => {
          //   cards[clcks[x]].style.border = "5px solid white";
          //   cards[clcks[x]].style.backgroundImage = `url(images/${finals[i]}.jpg)`;
          // }, 540)        
    }
  }
  for (let j = 0; j < 10; j++) {cards[j].classList.remove("noclick");}

  gameLogic();
}


function matchAnimation() {
  mainScreen.classList.add("matchEffect");
}
function gameTime(){
      
        interval = setInterval(function () {
          secs++;
          if (secs < 10) { secs = "0" + secs }
          else secs = secs;

          if (secs === 60) {
            mins++;
            if (mins < 10) { mins = "0" + mins }
            else mins = mins;
            secs = 0;
          }
          gameTimer.innerHTML = `Timer : ${mins} : ${secs}`;
        }, 1000);
        
      }


       

      function reverseCard(clcks,x){
           setTimeout(() => {
                     cards[clcks[x]].style.backgroundImage = "url(images/backNew2.jpeg)";
          }, 540)   
          for (let j = 0; j < 10; j++) {cards[j].classList.add("noclick");}
      }



  // console.log("actual cards clcks[0] = " + clcks[0]);
  // console.log("actual cards clcks[1] = " + clcks[1]);

  // console.log("cards to match crds[0] = " + crds[0]);
  // console.log("cards to match crds[1] = " + crds[1]);

  // console.log("finals[a] " + finals[a]);
  // console.log("finals[b-5]" + finals[b-5]);

  // console.log("a " + a);
  // console.log("b " + b);

  // console.log(cards);
  // console.log(finals);