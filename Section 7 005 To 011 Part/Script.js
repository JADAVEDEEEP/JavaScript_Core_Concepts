//here we our first DOM manuplation that we fetch our message class and their content using query selector
//it useful to represet the data feom html file using class name or id
//this is our firs time that we use the dom manuplation witihin fetchin content
//here we select the message and their content 



////////////////////////////////////SECTION 7 VIDEO_NUMBER-05-SELECTING AND MANIPLATING ELEMENTS//////////////////////////////////////////////////////////////////

//here message is we selected and we also selexted text content 
//READING CONTENT
console.log(document.querySelector('.message').textContent)
//MANUPLATE CONTENT
//here we manuplate the text and now you can see in the browser the value will be change
document.querySelector('.message').textContent = 'Start guessing new Score'

//HERE WE READ THE MANUPLATED NEW CONTENT IN CONSOLE
console.log(document.querySelector('.message').textContent)

//here we read the element secret number and manuplate them even with score 
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent =19;

//here we can manuplate the input data of button with select element
//even queryselectro also expect one arguent over here 
//here wer dont have any string applied value for get that value we use the 'value' object 
// //input field doesnt contain the value field or string for that get value we use the value object
// document.querySelector('.guess').value=23
// console.log(document.querySelector('.guess').value)


////////////////////////////////////Handling Click Events//////////////////////////////////////////////////////////////////

//here our application will do somthing were we gonna 
//our code will react to something that happend with dom
//handling clicking real life example : Mouse Click
//this will sekect the button element
// allows you to attach an event handler to a specified element, such as a button or a link.
//here we use the addEventlistner to handle html elments and events 
//here we add the type of eventlistner is 'click
//now its time to specfied to the even listner what to do
//we will crete one function were whenever click event occurs fucntion will executed what should be react on the browser

////////////////////////////////////Random Number Generator Logic /////////////////////////////////////////

//math.random : produce new number to get diffrent number everytime we multiply with 20 and add by 1 so it will be sure the number will not cross 1 to 20 
//math.trunc : that will cut the decimal number 
//math logic will generate the new number and the number message will generate the new number everytime betwwen 1 to 20
const secretNumber =Math.trunc(Math.random()*20)+1;//its object that gives always new number ane its always new and diffrent
let score = 20;


/////////////////////////////////////////////Click Event Part with Logic/////////////////////////////////////////////

document.querySelector('.check').addEventListener
('click',function(){
//here we stored that input into the varible   
//also we conver the string retun values in to the number 
const guess = Number(document.querySelector('.guess').value)//we use the type conversion here to cinvert the steing to number
console.log(guess,typeof guess)

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
})
//here we can see that the we are are getting input values in to the click event and fucntion is producing result in console that what input you been selected

//////////////////////////////////////////////////////////Restart Game////////////////////////////////////////////
