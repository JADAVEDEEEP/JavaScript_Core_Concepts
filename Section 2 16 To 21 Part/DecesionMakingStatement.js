// If statement//
//within the if statement you can test the block of code is it fulling the condition or not 

let age = 15
age =18
if(age >=18) // this if else statments carrying out the three two condtion one is age of 28 and one is younger 
{
    console.log(`deep is allowed to the lincense`)//if the  first operetion will turns out to be false then second block of code will be executed
}
else{
    const year = 18-age;
console.log(`deep is too young for lincence he has to wait ${year}years`)
}
//there is two deceseion making first if deep age has 18 years or he is too young for the lincene he has to wait for atleast three years//
// this structure called the controll structure that execute the block of code with each of block wisw so it will present all the condtion in manners

const birthyear = 1990
let century;// we here define the century befre the ecexution 
if(birthyear >=2011)
    {
    century=20;// here we pass the varible insted of log that contsind the values of boolean
}
else{
     century =21
}
console.log(century)
 // here we got the one example did exeecution using the variables intead of console log
 //whoever the code wrote insude of the block it cant execute the outside of the block
