//Arrow function 


//ARROW OPERATION 

const array =['deep','jadav','race','car']

const deep = (array)=>{
    return array
}
const rahul = deep(array)
console.log(rahul)

//FUCNTION EXPRESSION 

const deep2 = function (array){
    return `${array}`
}
const deeps = deep2(array)
console.log(deeps) 

//FUNCTION INSIDE FUNCTION 

const array1 = [1,2,3,4,5,6]
const array2 = [1,2,3,4,5,6]

const das = function(array1){
    return function(array2){
    return `array1: ${array1} Array2: ${array2}`
    }
}
const rad = das(array1)(array2)
console.log(rad)

//MAP WITH ARROW FUNCTION 
//i already have array 

console.log(array.map((array)=>array.length))

//Filter operation

const array4 = [1,2,3,4,5,6,7,8,]
console.log(array4.filter((array4)=>array4>4))

//REDUCE OPERAION 

const kal = (array4,array1)=>array4+array1
const arr=[1,2,3]
const das2 = arr.reduce(kal)
console.log(das2)