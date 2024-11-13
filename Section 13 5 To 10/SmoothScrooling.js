
//on the click event that would be scrolling would be done 
//here we gonna implment the scrroling fuanlity on the 'Learn more' element And to the section 1

const btnrolling  = document.querySelector('.btn--scroll-to')

const section1 =document.querySelector('#section--1')
//Instead of the anyonimus function i implented the Arrow function 
//findout the target betwwen actul postion and scroling element postion 
//just being use for the codinates viewpoint and dimension
btnrolling.addEventListener('click',()=>{
  //this biding client rect used to define Viewpoint of measures 
  const s1cods=section1.getBoundingClientRect()
//   console.log(s1cods)
//   console.log(e)
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