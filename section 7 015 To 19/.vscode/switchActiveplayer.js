
if(dice!==1){
    //if its not 1 then we want to add the current score 
   currentscore +=dice//when rool the idce it will stor the curren score snd also add whenever the dice would be roll
   document.getElementById(`current--${activeplayer}`).textContent = currentscore//we select the element daynemicall in based on the active player
   
//////////////////////////////////////////////////SWTCHING THE ACTIVEPLAYER/////////////////////////////////////////////////////


   }else  {
       //switch the player and we loose our current score 
       currentscore +=dice//when rool the idce it will stor the curren score snd also add whenever the dice would be roll
       document.getElementById(`current--${activeplayer}`).textContent = 0//we select the element daynemicall in based on the active player
     activeplayer= activeplayer===0?1:0//if active playee is 0 then 1 otherwise is 0
     currentscore=0
     player0.classList.toggle('player--active')//here we toogle the class from player 0 to 1 if they got 1 or 0
     player1.classList.toggle('player--active')
   }

