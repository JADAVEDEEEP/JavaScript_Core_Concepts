
////////////////////////////////////////CURRENT SCORE///////////////////////////////////////////
//its has to define outside otherwise on every onclick listner it would bes tore the 0 score in currebt value 
let currentscore = 0

///////////////////////////////////ROLING THE DICE LOGIC AND FUCNTINALITY//////////////////////////

//FLOWCHAR PHASE : GENERETE THE RANDOM NUMBER DISPLAY DICE ROLL IF ITS ONE THE NNEXT MOVE TO THE SECOND PLAYER

btnroll.addEventListener('click',function(){
  //1. Gnenerating Random Dice roll
    const dice =Math.trunc(Math.random()*6)+1//to generate random number

  //2. Display Dice
      diceEL.classList.remove('hidden')
      diceEL.src=`dice-${dice}.png`//i learned the new thing that we manuplate the attribute

  //3. check if the number is 1  

    if(dice!==1){
     //if its not 1 then we want to add the current score 
    currentscore +=dice
    current0.textContent=currentscore

    }else  {//switch the player
      
    }


});