/*1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to origina*/

 let coutary = 'portugal' 
let population = 35//here we pass the populton accrding to the condition said 
if(population >33)
{
    console.log(`${coutary}  population is above average` )//it will show avrage population
}
else{
     console.log(`${coutary} has pupulation${population-33} below million avg`)//either it will show 22 million below avrage 
}

//all things depends on the population how ever we want to change the 

// Type conversion and coerceion Assigenment

/*1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;//23
'123' < 57;//57
5 + 6 + '4' + 9 - 4 - 2;//
2. Execute the operations to check if you were righ*/

console.log(Number('9' - '5'))// 4
console.log(Number('19' - '13' + '17'))//617
console.log(Number('19' - '13' + 17))//23
console.log(Number('123' < 57))//0
console.log(Number(5 + 6 + '4' + 9 - 4 - 2))//1143 i had doubt on this qustion


/*1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation*/

//THIS BOTH COMMAND USED TO SYNC PROMPT IN TERMINAL//

//npm init -y
//npm i prompt-sync 


/*1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
    have?')*/


const prompt = require('prompt-sync')()//this is how you can sync prompt in terminal without runnning in browser 
    const numNeighbours  = prompt("whats your number : ")
    console.log(typeof numNeighbours)

    /*. 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now*/ 
/*3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 
 */

    if(numNeighbours === 1) //if its 1 negh beour we us the lose double operator to check
    {
        console.log("yes 1 neghbeiour")
    }
else if(numNeighbours === 1) //if its 1 negh beour we us the lose double operator to check
    {
        console.log("no borders")
    }
    //its reflecting nothing becuse the its strict values check now dtatypes inclues varible