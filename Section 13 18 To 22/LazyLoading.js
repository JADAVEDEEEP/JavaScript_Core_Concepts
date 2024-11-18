////////////////////////////////////////////////////////////////LAZY LOADING IMAGES //////////////////////////////////////////////////////////////
//laxy loading will remove the blur when we scroll the images one by one 
const imgtaget = document.querySelectorAll('img[data-src]')
console.log(imgtaget)

const laodImg = (entries,observer)=>{
  const [entry] =entries
  console.log(entry)

  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src 


  entry.target.addEventListener('load',()=>{
    entry.target.classList.remove('lazy-img')
  })
    observer.unobserve(entry.target)
}

const imgobserver = new IntersectionObserver(laodImg,{
  root:null,
  threshold:0

})
imgtaget.forEach(img=>imgobserver.observe(img))

//