
//////////////////////////////////////////////CSS JS STYLING DIRECT IN DOM //////////////////////////////////////////////
//here we style our meeesge element direcly on DOM  
message.style.backgroundColor='#373838'
message.style.width='120%'
message.style.height='1340px'
message.style.color='blue'
//it will change the property that alreayd exixt in the css
document.documentElement.style.setProperty('--color-primary','red')
//it will ge the propertys of the html attributes 
console.log(logo.dataset.versionNumber)
//it can add the property in the based of condtion 
logo.classList.add('a')
//it can remove the property in the based of condtion 
logo.classList.remove()
logo.classList.toggle()
logo.classList.contains()