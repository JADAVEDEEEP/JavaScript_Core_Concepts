
///////////////////////////////////////////////////////////////////////NAVIGATION SCROLLING USING EVENT DELEGATION//////////////////////////////////////////
//we are trying to probiding the smooth scroling to the navigation to thaeir exect target navigation
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     const id = e.currentTarget.getAttribute('href'); // Use currentTarget instead of target
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   });
// });

//1. Adding to common parent 
//2. determine what event intigrated to 

document.querySelector('.nav__links').addEventListener
('click',(e=>{
  e.preventDefault();
    if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href'); 
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
}))