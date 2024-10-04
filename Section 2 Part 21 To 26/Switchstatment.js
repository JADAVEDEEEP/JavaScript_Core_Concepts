// // is it the altrrnative way to write the if else statement 
// //it used to store multiple operation and complicated if-else statement



const prompt = require('prompt-sync')()//this is how you can sync prompt in terminal without runnning in browser 
    
var day = prompt('Pick a Weekname : ');

while (true){

switch (day) {
    
   case 'monday':
   console.log('working')
   break;

   case 'tuesday':
   console.log('working')
   break;

   case 'wed':
   console.log('working')
   break;

   case 'Thur':
   console.log('working')
   break;

   case 'Fri':
   console.log('working')
   break

   case 'sat':
   console.log('working')
   break;

   case 'sun':
   console.log('chiling')
   break;

   default:
   console.log('not n week day')

} 
}

