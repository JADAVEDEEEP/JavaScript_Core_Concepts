//SELECTING ELEMENTS

//select the both players values current score

const  current0= document.getElementById('current--0')
const  current1= document.getElementById('current--1')

//here we selected the three major buttons that gonna perfoms diffrent action 
const btnnew = document.querySelector('.btn--new')
const btnroll = document.querySelector('.btn--roll')
const btnhold = document.querySelector('.btn--hold')

//here we slect the player 1 s scores id to manuplate the score using queryselcetor we can do that
//PLAYER - 1
const player0 = document.querySelector('.player--0')
const Score_one = document.querySelector('#score--0')

//PLAYER -2
//we select second player scires id
const Score_second = document.querySelector('#score--1')
const player1 = document.querySelector('.player--1')

//DICE CLASS SELECT 
const diceEL = document.querySelector('.dice')

//MANUPLATING ELEMENTS PLAYER 1 AND 2 TOTALSCORE

//here he mamuplate the dice and create hiddden class in css and using that hide the dice with method of add the string argument

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {// this is function is use for  the new game 
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  Score_second.textContent = 0;
  Score_one.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceEL.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

const swithplayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0//we select the element daynemicall in based on the active player
    activePlayer= activePlayer===0?1:0//if active playee is 0 then 1 otherwise is 0
    currentscore=0
    player0.classList.toggle('player--active')//here we toogle the class from player 0 to 1 if they got 1 or 0
    player1.classList.toggle('player--active')
}

///////////////////////////////////ROLING THE DICE LOGIC AND FUCNTINALITY//////////////////////////

//FLOWCHAR PHASE : GENERETE THE RANDOM NUMBER DISPLAY DICE ROLL IF ITS ONE THE NNEXT MOVE TO THE SECOND PLAYER

btnroll.addEventListener('click',function(){
if(playing){
  //1. Gnenerating Random Dice roll
    const dice =Math.trunc(Math.random()*6)+1//to generate random number

  //2. Display Dice
      diceEL.classList.remove('hidden')
      diceEL.src=`dice-${dice}.png`//i learned the new thing that we manuplate the attribute

  //3. check if the number is 1  

    if(dice!==1){
     //if its not 1 then we want to add the current score 
    currentscore +=dice//when rool the idce it will stor the curren score snd also add whenever the dice would be roll
    document.getElementById(`current--${activePlayer}`).textContent = currentscore//we select the element daynemicall in based on the active player
    
//////////////////////////////////////////////////SWTCHING THE ACTIVEPLAYER////////////////////////////////////////////////////

    }else  {
        swithplayer()
    }
}
});

//////////////////////////////////////////////HOLDING THE SCORE LOGIC////////////////////////////////////////////////////////////////////////////

btnhold.addEventListener('click',function(){
    if(playing){    
    //1. add the cuurent }score into the total score
    scores[activePlayer]+=currentscore

    // scores[1]=scores[1]+currentscore
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
    //2.check score>=100
     if(scores[activePlayer]>=20){
        playing=false
        diceEL.classList.add('hidden')
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    //3.switch the next playere
     }else{

     }
    swithplayer();
    }
});
btnnew.addEventListener('click', init);


