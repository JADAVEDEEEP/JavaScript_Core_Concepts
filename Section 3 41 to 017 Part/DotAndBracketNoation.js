//is this will define the how retrive the data from the obbject using dot and brakets
//you can accest he proptuses of objects ouside of the objet using dot and beackets
const deep = {
    firstname:'rahul',
    lastname:'morgan',
    birthyeah:2000,
    age:22,
    Location:'Ahemdabad',
    haslinces:true,
    raka:['deep','ratan sir'],
}
console.log(deep)
console.log(deep.birthyeah)//this how using dot you can use the propties  objects outside
console.log(deep['lastname'])
//big diffrance betwwen those we can write any expression isndie the braket notations

const yeah ='yeah'
console.log(deep['birth'+yeah])//this expression way uou cn retrive the dats from the object using half name or last oroeery or half oroperty name


// console.log(deep.'last'+yeah)// we have to use final propery name we cant use the compute property name



const prompt= require('prompt-sync')()//this is how you can sync prompt in terminal without runnning in browser 
    
const mahirat = prompt('what do you know about the deep ? job,firstname,lastname,age: ');
console.log(deep[mahirat])//dot will be not work so put the brakets to store the any notations