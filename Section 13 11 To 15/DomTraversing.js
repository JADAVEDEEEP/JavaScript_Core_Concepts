//we can select elment based on the another element 
//some times we have to select child or parent elmetns directly 
///////////////////////////////////////////////////////DOM TRAVERSING///////////////////////////////////////////////////////////////////
// const h1 = document.querySelector('h1')


//Going dowoanerard selecting child elments 
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes)
console.log(h1.children)
//we can sert any child coments to sto style using dom trversing 
h1.firstElementChild.style.color='white'

//selecting parent elment driect 
console.log(h1.parentNode)
//closest will herl tp find closst element parent to style 
h1.closest('.header').style.background ='var(--gradient-secondary)'

