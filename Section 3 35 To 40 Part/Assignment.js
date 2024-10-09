/*1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage value*/


const population= [10,20,30,40]
console.log(population.length)
console.log(population)
function percentage (population){
    return population /4
}
const percentages = [
         percentage(population[0]) //one doubt why dont we store the multiple percentage inside the array    
] 
console.log(percentages)