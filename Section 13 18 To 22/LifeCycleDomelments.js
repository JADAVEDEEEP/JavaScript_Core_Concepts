
////////////////////////////////////////////////////LIFE CYCLE DOM EVENTS//////////////////////////////////////////////
//DOMXONTENTlODED : its runs as soon as DOM is ready for the execution it dosnt wait for images or scripts before loading 
/*
Faster execution: Scripts run as soon as the DOM is ready, without waiting for images or other resources to load.
Improved user experience: Enables faster interaction with the page content.
Efficient DOM manipulation: Ensures that scripts manipulate elements as soon as they are available.
Reduces delays: Helps avoid unnecessary delays caused by waiting for non-critical resources like large images.
*/ 
window.addEventListener('DOMContentLoaded',(e)=>{
    console.log('deep jadav parsed and dom build',e)
    })