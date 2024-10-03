/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/

let Mark_mass= 78
let Mark_height = 1.69

let jhon_mass= 78
let jhon_height = 1.95

 let Mark_BMI = Mark_mass/Mark_height **2
 let jHON_BMI = jhon_mass/jhon_height **2
 console.log(Mark_BMI,jHON_BMI)

if(Mark_BMI > jHON_BMI)
{
    console.log(`marks bmi ${Mark_BMI} is higher than jhons bmi ${jHON_BMI}`)
}
else{
    console.log(`jhons bmi ${jHON_BMI} is higher than marks bmi ${Mark_BMI}`)
}

//OUTPUT: CHANGE THE HEIGHT ACCORODING TO THE RESULTS 

/* Marks BMI IS HIGH

let Mark_mass= 78
let Mark_height = 1.69

let jhon_mass= 78
let jhon_height = 1.95
27.309968138370508 20.512820512820515
marks 27.309968138370508 is higher than jhons bmi 20.512820512820515*/

/* jhons BMI IS HIGH

let Mark_mass= 78
let Mark_height = 1.69

let jhon_mass= 78
let jhon_height = 1.60

27.309968138370508 30.468749999999993
jhons bmi 30.468749999999993 is higher than marks bmi 27.309968138370508 */

