
////////////////////////////////////SELECTING AND MANIPLATING ELEMENTS//////////////////////////////////////////////////////////////////

//here message is we selected and we also selexted text content 
//READING CONTENT
console.log(document.querySelector('.message').textContent)
//MANUPLATE CONTENT
//here we manuplate the text and now you can see in the browser the value will be change
document.querySelector('.message').textContent = 'Start guessing new Score'

//HERE WE READ THE MANUPLATED NEW CONTENT IN CONSOLE
console.log(document.querySelector('.message').textContent)

//here we read the element secret number and manuplate them even with score 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent =19;


//here we can manuplate the input data of button with select element
//even queryselectro also expect one arguent over here 
//here wer dont have any string applied value for get that value we use the 'value' object 
//input field doesnt contain the value field or string for that get value we use the value object
document.querySelector('.guess').value=23
console.log(document.querySelector('.guess').value)

