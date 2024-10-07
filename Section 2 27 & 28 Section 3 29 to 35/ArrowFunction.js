//its shorter way to write the fucntion rather than tradional function 
//it is  faster way to write function
//specal form of declarion of function it is the part of morder javascirpt Eschema Scrript
//we dont need the curly braces to define the arrow function
//values will autometically retun the values withou including the return statment
//how ever we do needeed this curly bracket when code of block are more or ore perameter


// Arrow Function 
//if its many perameters we do wrap in brakcets to multiple perameters
let agecal3 = birthyear => 2037 - birthyear;
let age3 = agecal3(1991);  
console.log(age3)


const deathyear =birthyear=>{
    const death = 2024-birthyear
    const birth = 40 - death
    return birth
}

console.log(deathyear(1991))