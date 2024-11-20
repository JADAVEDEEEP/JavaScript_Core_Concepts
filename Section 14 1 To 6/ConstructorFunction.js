//CONSTRUCTOR FUNCTION 
//THEY ALWAYS START WITH FIRST CAPITAL LATER 
//THEY CAN ONLY ACCES WITH FUCNTION DECLRATION AND EXPRESSION 
//PERSON IS THE PRTOTTYPE WAUTOMETICALLY ASSIGN WITH THE OBJECTS ONCE INSTANCE CALLED AND EXECUTE 
const Person = function(firstname,birthyear){
    //this keword create initlize the objects values in console 
  this.birthyear = birthyear
  this.firstname = firstname
}
//we called constrctor in js using NEW keyword 
const deep = new Person('deep',1999)
console.log(deep)

//1. New empty object its created
//2. fucntion called this keyword woulde set this ={}
//3. newly creted object linked to prototype
//4. function anutometically returns the empty 