//clouser cant define or use it will be autometically in some sorrt of sisiutuon 

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }
// //here as yiu can see the deep will store our retun function values 
// const deep = greet('Hi Guys I Am')
// deep('deep jadav')


// //this is one the closure example were tow function producing values sapretly withing knoning formating so how deos that happen becsue of closures 
// //when we called the securebookings function it would ne executed and get our of the call stack and now so still how is this code is executing the another funcrion and passanger count
// //even we can say tha if function got expried or out of stack still we can execute the another operation or fucntion nand that would be closure 
// const securebookings = function(){
//     let passangercount = 0;

//     return function (){
//     passangercount++ 
//     console.log(`${passangercount}passangers`) 
//     }
// }

// //closure afte scope destropyed it will still execute the result that how closure works
// //function always has acces to exection after the death execution that known as the closures 
// //here is the global exextion on the envaroment so it will gonna execure the resutl 
// const booked =securebookings();
// booked()
// booked()

// const deep2= function(grettiungs){
//    return function(age){
//     console.log(grettiungs,age)
//    }  
// }
// const rax = deep2('hii i am uptake intern')
// rax('i am 25 years old ')


//DEFINATION : THE CLOSURE IS THAT CHILD CAN ACESS THE PROPERTY OF PARENT BUT PARRENT CANT ACCESS
//REAL LIFE EXAMPLE : FATHER AND SON AND PROPERTY

function deep(){
    let count = 0 //outer function
    return function(){
        count++//inner function
        return count
    }
}
const counter = deep()
console.log(counter())
console.log(counter())
console.log(counter())