//Function is pice of code that we reuse over and over agin in code 
//fucntion can hold the one or more line of complete code 
//once we decalred the function we can use many time we want
//we can call the function multiple times
//function pass the data as wel ass retun data too
// real life example : Machine

function logger()//this brackert called fucntion buddy
{
console.log('deep is my name')// this is also called the inline-scope or local scope that will executed after the clling fucntion
}

//this way we can call the functon in another term we can say that it is the calling function
logger();
logger();

//
//we pass the perameter inside of this function perameter same as the varible 
function bombprocessor(RDX,orranges){//since we only pass the peeameters but not values calling function wil represe t undefined
    console.log(RDX,orranges)//we have to log the permeters before the calling function  
    const rdx_orn = `we made ${RDX} and ${orranges}`//we define one varible and and pass perameters and we retun the that varible so with calling function we will also get that string that we store in return
    return rdx_orn
    
}
const rdx_rd = bombprocessor(5,0)// we create one varible over here to ececute the retun string with calling perameters
console.log(rdx_rd)
//here pass the values to the perameters 

const rdx_oranges = bombprocessor(2,4)//we created the one varibale and use that same function to provide diffrnet peramaters values
console.log(rdx_oranges)//thats advantage of function you can use twice the function and change ther values ultiple times using same function