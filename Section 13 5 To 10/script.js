


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


//modifided code by me normal function in to Arrow function both modal done with Arrow function 
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = (e) => {
    e.preventDefault();  
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
//Pass the function call back as openmodal so one at time we can use openmodal pop up on two diffrent buttons 
btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',(e)=> {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////SELECTING CREATING DELETING ELMENTS///////////////////////////////////
// //////////////////////////////////////////////////ALL SELECTING ELEMENTS///////////////////////////////////
// //this sleect document will get he your entire docuemtnt of html file 
// //you can get even head event and body
// console.log(document.documentElement)
// /////////////////////////////////////////////SELECTORS ELEMENTS//////////////////////////////////////
// //there bunch of selceots 
// //its used toe select classnames even ids
// document.querySelector('.head')

// //thsts used to select the multiple elemetns /
// //this will contain all the section of html elments code 
// const allsections = document.querySelectorAll('.section')
// console.log(allsections)
// ////////////////////////////////////////////////DOM LIVE HTMLCOLLECTION //////////////////////////////////////////
// document.getElementById('#section--1')
// //it will show html collection as we know live collection 
// //if DOM changes it autometically will change and update the DOM 
// const allbuttons = document.getElementsByTagName('button')
// console.log(allbuttons)

// console.log(document.getElementsByClassName('btn'))


// /////////////////////////////////////////CREATE AND INSERT ELEMENTS IN JS ////////////////////////////////////////
// //use for the creating elments quickly in to the js scripts 
// //we got bank list example that we stored our html transiction inside the this tag to placed the html code at specefied postion 
// //.insertAdjacentHTML
// //this will create elment in center of website 
// ///////////////////////////////////////////////CREATE ELEMENT/////////////////////////
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookies to improve user experience. <button class="btn btn--close--cookie">Deep Jadav</button>';
// ///////////////////////////////////////////////INSERT ELMENT IN TO HEADER /////////////////////////////////////////

// //header parent and child would be message so we stored our message into parent header 
// const header = document.querySelector('header')
// //ITS Adds first child 
// header.prepend(message);
// //its adds last child


// // //this will insert multiple elments at same time with diffrent places 
// // header.append(message.cloneNode(true))

// // //it will set message before the header 
// // header.before(message)

// // //it will set the message after the header
// // header.after(message)

// //////////////////////////////////////////////DELETING ELMENTS //////////////////////////////////////
// // document.querySelector('.btn--close--cookie').addEventListener('click', (event) => {
// //   event.target.remove();
// // })

// //here we delete the button on one click lsitner 
// document.querySelector('.btn--close--cookie').
// addEventListener('click',function(){
//   message.remove()
// })
// //////////////////////////////////////////////CSS JS STYLING DIRECT IN DOM //////////////////////////////////////////////
// //here we style our meeesge element direcly on DOM  
// message.style.backgroundColor='#373838'
// message.style.width='120%'
// message.style.height='1340px'
// message.style.color='blue'
// //it will change the property that alreayd exixt in the css
// document.documentElement.style.setProperty('--color-primary','red')
// //it will ge the propertys of the html attributes 
// console.log(logo.dataset.versionNumber)
// //it can add the property in the based of condtion 
// logo.classList.add('a')
// //it can remove the property in the based of condtion 
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()

///////////////////////////////////////////////////IMPLEMENTING SMOOTH SCROLLING ///////////////////////////////////////////

//on the click event that would be scrolling would be done 
//here we gonna implment the scrroling fuanlity on the 'Learn more' element And to the section 1

const btnrolling  = document.querySelector('.btn--scroll-to')

const section1 =document.querySelector('#section--1')
//Instead of the anyonimus function i implented the Arrow function 
//findout the target betwwen actul postion and scroling element postion 
//just being use for the codinates viewpoint and dimension
btnrolling.addEventListener('click',(e)=>{
  e.preventDefault()
  //this biding client rect used to define Viewpoint of measures 
  const s1cods=section1.getBoundingClientRect()
  console.log(s1cods)
  console.log(e)
//left: 0 top : 699
//scrollTo : its a inbult methods thsts scrolls the elements on the basis of x and y cordinates 
  //sctoll to function in basiis of corodinates it will sctoll the x to y
// window.scrollTo({
//     left:s1cods.left ,
//     top: s1cods.top ,
//     behavior:'smooth'  ,
   
//but this function within view will represnt scroll with smooth behavius 
section1.scrollIntoView({behavior:'smooth'})
})

// ///////////////////////////////////////////EVENT AND EVENT LISTNERS PROPOGATION///////////////////////////////////

// //EVENT :its as signal that generated by Node that something would be happend in browser
// //example : Click Event ,Mouse Moving

// //MOUSER ENTER EVENT
// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', (e) => {
//   alert('Great! You are reading.');
// });

// h1.onmouseenter = (e)=>{
//   alert('deep jadav')
// }

///////////////////////////////////////////////////////EVENT PROPOGATION PRACTICE INTO LINKS HEADER////////////////////////////////////////
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', (e) => {
    e.target.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', (e) => {
   e.target.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', (e) => {
   e.target.style.backgroundColor = randomColor();
});
