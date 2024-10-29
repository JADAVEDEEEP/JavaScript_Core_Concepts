//LOOPING OVER FOREACH ELEMENTS

//FOR EACH : ITS BUILT-IN FUNCTION THAT EXECUTES THE FUNCTION ONCE IN EACH OF ARRAY ELEMENT 

///////////////////////////////////DEPOSITE AND WIDHDEWAL NAGATIVE AND POSITIVE//////////////////////////

// const movments = [200,450,-400,3000,-650,-130,70,1300]

// for (const movment of movments)
// {
//     if(movment > 0){
//         console.log(`You Deposted :- ${movment}`)
// }else{
//      console.log(`You Withdraw :- ${Math.abs(movment)}`)
// }
// }



//////////////////////////////////////////////ENTRIES /////////////////////////////////////////
///////////////////////////FOR OF LOOP//////////////////////////
const movments = [200,450,-400,3000,-650,-130,70,1300]
//here we used tge key value that will be retun by entires for any object types 
for (const [i,movment] of movments.entries())
{
    if(movment > 0){
        console.log(`Movement ${i+1}: You Deposted :- ${movment}`)
}else{
     console.log(`Movement ${i+1}: You Withdraw :- ${Math.abs(movment)}`)
}
}
//For each is higher order function that always need callbackfunction 
//for each executed all the elment once on every each of time function call back calls 
console.log('-------------FOREACH-----------------')
//we used the if condtion postive is deposit number and hdrwal number nagative is the wid
movments.forEach(function(movment,i){
    if(movment > 0){
        console.log(`Movement ${i+1}: You Deposted :- ${movment}`)
}else{
     console.log(`Movement ${i+1}: You Withdraw :- ${Math.abs(movment)}`)
}
})

//Foreach : ont work with break statments
//for of : comfitablw with for of statment 