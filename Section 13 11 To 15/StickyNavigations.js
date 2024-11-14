
///////////////////////////////////////////////////////////////////STICKY NAVIGATION//////////////////////////////////////////////

const intinacoords = section1.getBoundingClientRect()
console.log(intinacoords)
window.addEventListener('scroll',()=>{
  console.log(window.scrollY)

if(window.scrollY>intinacoords.top) nav.
classList.add('sticky') 
else nav.
classList.remove('sticky')
}
)


