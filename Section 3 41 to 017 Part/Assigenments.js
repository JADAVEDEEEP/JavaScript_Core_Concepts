/*1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments*/



const myCountry ={
    country:'India',
    capital:'Delhi',
    Language:'Hindi',
    Population:'1.5 Billion'
}
console.log(myCountry)

/*. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property*/ 

const myCountry_two ={

    country:'India',
    capital:'Delhi',
    Language:'Hindi',
    Population:'1.5 Billion',
    neghbours:['delhi','swedan','Asia','isIsland'],//no neghbiours it  will be true or oterwise false

    Describe:function(){
        console.log(`my countary is ${this.country} were we have captiak city ${this.capital} we spoke ${this.Language} were we have population of ${this.Population}  `)
        
    },
    checkIsland: function () {
        this.isIsland = this.neghbours.length === 0 ? true :
        false;
        }
        };
        myCountry_two.Describe();
        myCountry_two.checkIsland();
        console.log(myCountry_two);

        /*1. There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently votin*/


let i 
for(i=0;i<=50;i++)
{
    console.log(`'Voter number ${i} is currently voting`)
}
