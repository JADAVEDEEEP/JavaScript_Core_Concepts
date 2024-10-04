// /*1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
// country that speaks english, has less than 50 million people and is not an 
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. 
// You will need to write a condition that accounts for all of Sarah's criteria. Take 
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily 
// change some variables in order to make the condition true (unless you live in 
// Canada :D)*/





let country = 'Canada'; 
const language = 'English';
let population = 40;
const island = false;// here i appply false so it will become true that is not island

// //here is the condtion like sarah wants full english countray that has population less then 50 million it would be not isLand

if (language === 'English' && population < 50 && !island)  {
  console.log(`You should live in ${country}:`);
} else {
  console.log(`${country} does not meet your criteria`);
}


// /*Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :*/


const prompt = require('prompt-sync')()//this is how you can sync prompt in terminal without runnning in browser 
    
var languages = prompt('Pick a languages : ');

while (true){

switch (languages) {
    case 'chchinese':
      case 'mandarin':
   console.log('MOST number of native speakers!')
   break;

   case 'spanish':
    console.log('2nd place in number of native speakers')
    break

    case 'english':
      console.log('3rd place')
      break

      case 'arabic':
      console.log('5th most spoken languag')
      break
        
       
    case 'english':
      console.log('3rd place')
      break       
           
      default:
    console.log('for all other simply log Great language too')

} 
}

/*1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to*/ 

const counter = 'Portugal';
console.log(counter)
const populations = 32 >= 33 ? `${counter}'s population is above average` : `${counter}'s population is below average`;
console.log(counter, populations);
