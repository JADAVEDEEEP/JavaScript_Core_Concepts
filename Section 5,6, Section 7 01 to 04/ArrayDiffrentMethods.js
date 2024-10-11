//object key : object key is the that descibre key factor as varible like proving values to varible just same like key and values 
//ex FirstName : 'deep'

//object property : property will be the most of the includes key value pairs both
//object ={Name : 'rahul'},{Name : 'rahul'}just like many propertyes


// SHIFT ARRAY METHOD:
//basically used the remove the first array element 

const Frusits = ['deep','jaav']
Frusits.shift('deep')
console.log(Frusits)

//ARRAY CONCNAT

//used tp merger the array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

//ARRAY SPLICE
//The splice() method can be used to add new items to an array:

//using array length we can add array element 
//on the basis of array length find the values and excnahe the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,1, "Lemon", "Kiwi");
console.log(fruits)


//ForEach method Array
//is used to execute the same code on every element in an array but does not change the array and it returns undefined.

Example:
let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){
    console.log('I want to eat '+foodItem);
});

//MAP METHOD

//xecutes the same code on every element in an array and returns a new array with the updated elements


let cost = [100,400,300,700];
let newCost = cost.map(function(costItem){
    return costItem / 10;
});
console.log(newCost);

//.filter():

//.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

let cost1 = [100,400,50,40,700];
let smallCost = cost.filter(function(costItem){
    return costItem < 200
});
console.log(smallCost);