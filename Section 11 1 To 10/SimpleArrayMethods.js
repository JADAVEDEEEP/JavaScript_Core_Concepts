//SIMPLE ARRAY METHODS 
//ARRAYS IS TYPE OF OBJECT THAT USED TO STORED THE MULTIPLE DATA WITTIN THE DIFFRENT DATA TYPE LIKE NUMBER STRING BOOLEAN 


let arr= ['A','b','c','d','e']


//1. SLICE METHOD
//generate new length of  an array but not effect the orignal array
console.log(arr.slice(2))
console.log(arr)

//2. SPLICE METHOD
//it will delete the element but also effect the orignal array 
console.log(arr.splice(2))
console.log(arr)

//3. REVERSE 
//reverse method wil reverse the all elements of array but it will also muted the orignal array 
arr= ['A','b','c','d','e']
const arr2 = ['i','j','k','l','p']
console.log(arr2.reverse())
console.log(arr2)

//4. CONCAT
//concnat uses to merge two seprate array in ome array of elment 
//concnat will not muted the orignal array
const letters = arr.concat(arr2)
console.log(letters)

//5. JOIN 
//join is used to join all the eoments of an array in to string
console.log(letters.join('-'))
