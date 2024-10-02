/*1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese*/


//BASIC OPERTOR ASSIGEMENT//

/*1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?*/

let country;
let population = 100 // we store the one countary and the give the population 100 now divide in splin half would be two set then it would be show the 50/50 to each splint
console.log(population/2)

//2. Increase the population of your country by 1 and log the result to the console

population++ // here is the popukation is 100 and i increese the with the help of the ++ operator
console.log(population)

// 3. Finland has a population of 6 million. Does your country have more people than Finland?

let my_Country_population = 7
let Finland_population = 6 
if(my_Country_population > Finland_population)
{
    console.log('my countary has the highest one')
}

// 4. The average population of a country is 33 million people. Does your country 
//have less people than the average country?

let my_Country_avg_populations = 25
let countary_avg_population = 33
if(my_Country_avg_populations < countary_avg_population)
{
    console.log('yes we have that less people ')
}

/*5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese*/


let description = 'Portugal is in Europe'+' and its 11 million '+'people speak portuguese'
console.log(description)

// Strings and Template Literal Assiement

/*Recreate the 'description' variable from the last assignment, this time 
using the template literal synta*/

country ='portugal is in europe'
population = 'its 11 miilion people speak '
language = 'portuguese'


let descriptions = `${country} and ${population} ${language}`//here how we can store correct format of multiple line string using templete litrels 
console.log(descriptions)

