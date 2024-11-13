
////////////////////////////////////////////////////SELECTING CREATING DELETING ELMENTS///////////////////////////////////
//////////////////////////////////////////////////ALL SELECTING ELEMENTS///////////////////////////////////
//this sleect document will get he your entire docuemtnt of html file 
//you can get even head event and body
console.log(document.documentElement)
/////////////////////////////////////////////SELECTORS ELEMENTS//////////////////////////////////////
//there bunch of selceots 
//its used toe select classnames even ids
document.querySelector('.head')

//thsts used to select the multiple elemetns /
//this will contain all the section of html elments code 
const allsections = document.querySelectorAll('.section')
console.log(allsections)
////////////////////////////////////////////////DOM LIVE HTMLCOLLECTION //////////////////////////////////////////
document.getElementById('#section--1')
//it will show html collection as we know live collection 
//if DOM changes it autometically will change and update the DOM 
const allbuttons = document.getElementsByTagName('button')
console.log(allbuttons)

console.log(document.getElementsByClassName('btn'))


/////////////////////////////////////////CREATE AND INSERT ELEMENTS IN JS ////////////////////////////////////////
//use for the creating elments quickly in to the js scripts 
//we got bank list example that we stored our html transiction inside the this tag to placed the html code at specefied postion 
//.insertAdjacentHTML
//this will create elment in center of website 
///////////////////////////////////////////////CREATE ELEMENT/////////////////////////
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies to improve user experience. <button class="btn btn--close--cookie">Deep Jadav</button>';
///////////////////////////////////////////////INSERT ELMENT IN TO HEADER /////////////////////////////////////////

//header parent and child would be message so we stored our message into parent header 
const header = document.querySelector('header')
//ITS Adds first child 
header.prepend(message);
//its adds last child


// //this will insert multiple elments at same time with diffrent places 
// header.append(message.cloneNode(true))

// //it will set message before the header 
// header.before(message)

// //it will set the message after the header
// header.after(message)

//////////////////////////////////////////////DELETING ELMENTS //////////////////////////////////////
// document.querySelector('.btn--close--cookie').addEventListener('click', (event) => {
//   event.target.remove();
// })

//here we delete the button on one click lsitner 
document.querySelector('.btn--close--cookie').
addEventListener('click',function(){
  message.remove()
})