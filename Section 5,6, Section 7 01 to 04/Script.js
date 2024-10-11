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
document.querySelector('.message').textContent = 'Winner games'
//HERE WE READ THE MANUPLATED NEW CONTENT IN CONSOLE
console.log(document.querySelector('.message').textContent)
