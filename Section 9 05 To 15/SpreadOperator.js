//pack the all the array elements at once 
//we only use spread operatoer when we use the function or in array
const arr= [3,4,5]
const badnewarr = [1,2,arr[0],arr[1],arr[2]]
console.log(badnewarr)

//so spread operator do take out the array and write them manually
//like we want store the the array outside withou using of array just like normal number then spread operator used
//here we arite our array inside the arryy using spread operator
const newArr = [1,2,...arr]
console.log(newArr)

//here we use the spread operator to log the value and it will store the value outide of array

console.log(...newArr)

const resturent = {
    newmenu : ['Hi','My','Name']
}

//here we create orignal array with the ne array so it will store tne orignal array and new array
const newmwnu = [...resturent.newmenu]
// console.log(newmwnu)


//use case of spread and shallow copy af n array
// we created the shallow copy 
// const mainmenucopy = [...resturent.newmenu]

//join two arrays
//i sotre the both arrays values in one log so it will sote the all array values indivuslal
const menu = ['is','Deep','See ya']
console.log(...newmwnu,...menu)

//for storing destructing array we have to create varivle 
//but for the spread operator we doesnt have to cresate array we can implement the using ... dots 

/////////////////////////////////////Itrable parts //////////////////////////////
///itrables : are array,string,maps,not objects

const str ='jonas'
const arr1= [...str,'','s','']
console.log(arr1)

//here we get the one example using functuion tht takes the array as na argumetn and retuns the value 
//////////////////////////////////////////SPREAD WITH FUNCTION//////////////////////////////////
const array2= [1,2,2,3,4,5,...arr]
function array(...args){
  return args
}
console.log(array(...array2))

//////////////////////////////////////////////////SPREAD OPERSTO WITH OBJECT /////////////////////////

const objedt = {
    array:['rahul','deeo','chase'],
    array4:['rahul','deeo','chase'],
    arras:['rahul','deeo','chase']
}
console.log(...objedt.array,...objedt.arras)


//////////////////////////////////////////SPREAD OUTPUT /////////////////////////////////////////
/*
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
1 2 3 4 5
Hi My Name is Deep See ya
[
  'j', 'o', 'n', 'a',
  's', '',  's', ''
]
[
  1, 2, 2, 3, 4,
  5, 3, 4, 5
]
  */
 