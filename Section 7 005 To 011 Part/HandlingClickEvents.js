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

document.querySelector('.check').addEventListener
('click',function(){
//here we stored that input into the varible   
//also we conver the string retun values in to the number 
const guess = Number(document.querySelector('.guess').value)//we use the type conversion here to cinvert the steing to number
console.log(guess,typeof guess)
//here we implment some logic like if no input the number will be shown the zero 
//morever we store the one manuplated message tin empty input 'No Number'
if(!guess){
document.querySelector('.message').textContent = 'No Number'
}

})

//here we can see that the we are are getting input values in to the click event and fucntion is producing result in console that what input you been selected

