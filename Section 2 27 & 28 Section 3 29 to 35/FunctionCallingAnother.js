//function inside the function is also called the neested of the function


function boxer(fruits){ //here we define one function
   return fruits * 4
}

function boxer_champion (apples){//here we created our second function
  const box =  boxer(apples)//here we call our function that also known as the fucntion call
   return box
}
console.log(boxer_champion(2));// here we log our function