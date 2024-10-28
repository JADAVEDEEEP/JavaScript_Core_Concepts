
//here we pass the primitive type string flight num 
const flight = '2334ef'
const deep = {
    name : 'deep jadav',
    passport : 2434345454
}

const checkin = function (flightnum,passnger)
{
 flightnum = 'LH099'//here we use this values as copy but it wont change the values and it still primitve reminas the same 
 passnger.name="Mr" +passnger.name 
 
if(passnger.passport === 2434345454){
alert('checkin')
}else{
    alert('Kikecout')
}
}
checkin(flight,deep)
console.log(flight)
console.log(deep)
//////////////////////////////////////////////UNDERSTANDING EXAMPLE////////////////////////////

/// Primitive Types
let a = 5;
let b = a; // b gets a copy of the value 5
b = 10; // a remains 5

// Reference Types
let obj1 = { name: "John" };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Jane"; // obj1.name is now "Jane" as well

//////////////////////////////////////////////////PEREMETER VS ARGUMENT //////////////////////////////////00
//a parameter is a variable in the function definition, while an argument is the actual value that is passed to the function when it is called.