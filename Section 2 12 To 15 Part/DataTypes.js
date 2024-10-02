// data can has multiple types like bolean string number //

const { Tune } = require("@material-ui/icons")

// //values has two types//
// //{like object
// let Person={
//     name :'deep'

// }
// //or primitive 
// let firstname='xyz'
// let age=30;

// 1. number : always have floating point number either is decimal or intgear let=23
// 2. String : sequnce of character that always use for text and manuplation for text let js= 'deep'
// 3. Boolean : is a logical type is either sotre true or false its use for decesion making let age =true or false
// 4. undefind : varible declared but didnt asigned the values let = age;
// 5. null : varible declared but  asigned the values null let x = null;
// 6. symbol(Es2015) : defines the values uniqly 

//. Number

let number = 30//intgear number
let floating = 30.50 //floting number

console.log(number+" "+floating)// this you can store multiple varible in one console 

//. String

let string = 'I am prorgamer in uptake infotech'
console.log(string)

// Boolean

var x=10
let y=20

if (x<y)//based on the condtion either is grater or lower
{
    console.log(true)
}
else{
    console.log(false)
}

let Javascriptfun = true // its boolean 
console.log(Javascriptfun)
console.log(typeof true)// this how you can mesasure the type of varible using type of

//Undefine

var a;
a = 200
console.log(typeof a)

// null 

var a = null;

//Dynamic typing 

//its actully use to change the values type without using datatype that called daynamic//

Javascriptfun = "Deep"//here we use the boolean varible and we did chnge the value in string 
console.log(typeof Javascriptfun)



