// FUNCTION ASSIGNMENT

/*
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store th
*/ 

function describeCountry(country='Finland',population=6,capitalCity='Helsinki'){//here we created the one runction three perameters and assigend the first coutary values
const countarys = `${country} has ${population} million people and it s capital city is the ${capitalCity}`
return countarys
}
const first_countary = describeCountry();
console.log(first_countary)

const second_countary = describeCountry(country='india',population=5,capitalCity='delhi')
console.log(second_countary)


const third_countary = describeCountry(country='Russia',population=8,capitalCity='Moscow')
console.log(third_countary)



/*
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations) */

//FUNCTION DECLARATION

function percentageOfWorld1 (population)
{
    return (population/7900)*100
}
//FUNCTION EXPRESSION 


const percentageOfWorld2 = function(population){
    return (population/7900)*100
}

const Portugal = percentageOfWorld1(2625)
const USA = percentageOfWorld1(2625)
const England = percentageOfWorld1(2650)
console.log(Portugal,USA,England)



//fucntion delcration simple example

function addtion (a,b){
 return a+b  
    
}
var age =addtion(5,6)
console.log(age)

//function expression simple example

const age_virat = function(a,b){
    return a+b
}
var age_one = addtion(10,11)
console.log(age_one)



// ARROW FUNCTION assignment

/*Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld*/

const percentageOfWorld3 = population => population / 7900 * 100;

const Portugal1 = percentageOfWorld3(2625);
const USA1 = percentageOfWorld3(2625);
const England1 = percentageOfWorld3(2650);

console.log(Portugal1,USA1,England1)


//FUNCTION CALL ANOTHER FUNCTION ASSIGNMENT
/*
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choic
*/ 

function describePopulation(countary,population){
 const describeCountry =`${countary} has ${population/7900*100}`  
  return describeCountry 
}
function percentageOfWorld (){
   
    const USA = describePopulation('nevada',1000)
    const India = describePopulation('Delhi',1000)
    const NewZeland = describePopulation('Auckland',1000)
    console.log(USA,India,NewZeland)
}
percentageOfWorld()