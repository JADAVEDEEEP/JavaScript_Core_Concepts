
///////////////////////////////Alll Secanrio Logic///////////////////////////

//here we implment some logic like if no input the number will be shown the zero 
//morever we store the one manuplated message tin empty input 'No Number'
if(!guess){
    document.querySelector('.message').textContent = 'No Number'
    //here is the logic if the generated number guess us right then print correct number
    
    //if both number matches it will print correct number
    }else if (guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct Number'
        document.querySelector('body').style.backgroundColor = '#60b347';
        
    //if guess number is high it will print high
    }
    else if (guess>secretNumber){
    if(score > 1){//if value is greather than one is not over since is 0 you will lose the game  
        document.querySelector('.message').textContent='Too High'
        score = score-1;//since guss is high or low once you wont able to guess score will deceeses by one
        document.querySelector('.score').textContent = score;
    //if number is too low then it will print low  
    }else{
          document.querySelector('.message').textContent = 'you lose the game'
          document.querySelector('.score').textContent = 0;
        }      
    }
    else if (guess<secretNumber){
        if(score > 1){//if value is greather than one is not over since is 0 you will lose the game  
            document.querySelector('.message').textContent='Too Low'
            score = score-1;//since guss is high or low once you wont able to guess score will deceeses by one
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'you lose the game'
            document.querySelector('.score').textContent = 0;
          }      
      }
    
    ////here we can see that the we are are getting input values in to the click event and fucntion is producing result in console that what input you been selected
    
    //////////////////////////////////////////////////////////Restart Game////////////////////////////////////////////
    