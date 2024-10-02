/*//1 VARIABLES AND VALUES ASSIGENMENT

1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console8
*/

let country = 'India';

let continent = 'Asia';

let population = 50 ;


console.log(country+" "+continent+" "+population);// this way you can store multiple variables within single log//

//2. DATATYPES ASSIGENMENT

/*1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

let isIsland =  true //here i declared the value as boolean
isIsland = 'ANdmanNikobar'// here i used the dynamic typeing to change the boolean values in to string so it will carry out string thats why current value of varible it will show string 
let language; // this is undefined example
console.log(typeof isIsland) // this is type of were used to find the varible type either boolean or string
console.log(typeof country)
console.log(typeof population)
console.log(typeof language)

// 3. Let Var And Const Task

/*1. Set the value of 'language' to the language spoken where you live (some 
    countries have multiple languages, but just choose one)
    2. Think about which variables should be const variables (which values will never 
    change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happen*/

language = 'portuguese'; // this will mute the current language and print the portuguese
 const country1 = 'Portugal'; // this will be reamins const and imutable
 const continent2 = 'Europe';//this will be reamins const and imutable
 const isIsland3 = false;// here we applied the const boolean 
 isIsland = true //here we try to modified the const booleans but it will present error becuse const can be reasign
