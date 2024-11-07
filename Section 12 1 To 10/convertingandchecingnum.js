//cheacking num by the stricly ooeratoe
//some franction the ywont represent line binary calculation
console.log(23===23.0)
//this expresion number will not allowd becsue its iligial 
console.log(0.1+0.2===0.1)

//this number will print becuse it will understand type coerceion 
//i alos used the conversion string num into the int num
//it will retun the Nan if we used the character insted of digits 
console.log(Number('23a'))

//
console.log(+'23')

//parsing 
//it will take also cahracter digit and even only return the number 
console.log(Number.parseInt('23abcd'))
console.log(Number.parseInt('e23',10))
//Type Coerciom
const deep ='deep '+23+'deep jadab'
console.log(deep)
//it will print the point digit number 
console.log(Number.parseFloat('2.5rem'))

//IS NOT NUM
//use to check if its the number or not 

console.log(Number.isNaN(+'20x'))


//ISFINITE
//it will print true becuse is num is countable
console.log(Number.isFinite(20))
//it will false becuse its tring
console.log(Number.isFinite('20'))

console.log(Number.isNaN(+'20'))