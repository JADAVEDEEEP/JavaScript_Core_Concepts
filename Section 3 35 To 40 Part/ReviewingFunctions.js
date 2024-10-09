//fucntiom reiviewing 

function deep (apples){
return apples*2
}
function deep2 (juice){
   const fax = deep(juice*2) //this is called fuction called another function inside and mulfiply two times using second function 
   return fax
}
console.log(deep2(2))