
///////////////////////////////////////SELECTING ELEMENTS //////////////////////////////////////////////////////

//MODEL HIDDEN CLASS ELEMENT
const modal = document.querySelector('.modal')

//MODEL OVERLAY CLASS ELEMENT
const overlay = document.querySelector('.overlay')

//CLOSE MODEL CLASS ELEMENT

const btnCloseModal = document.querySelector('.close-modal')

//SHOW MODEL CLASS ELEMENT
//we use quweyselectorall to select all three buttons withn having same content and classname 
const btnShowModel = document.querySelectorAll('.show-modal')
console.log(btnShowModel)
//we use for loop over here to print three elements data over here 
//we select the text content over here and using length of n varible we can identify the exect show model property
let i
for(i=0;i<btnShowModel.length;i++)
    btnShowModel[i].addEventListener('click',function(){
      
    
        modal.classList.remove('hidden')//since we fire the even here we will set the method remove that remove the hiddle class and show the content 
        overlay.classList.remove('hidden')   
        
    })
 
