// converting number in to the boolean or in any version we do us e typeconversion
// type conversion : when we manually conver the one to another
// type coercion : that converts autometically values one to another its happen hidden ways
//Type conversion
const inputyear = '1991'//this number is store in to the string so it will print like 199118 becus its strinhg it wont execute the number 
console.log(Number(inputyear),inputyear);//here we did the type conversion of string to num using number fumction in-bilt 
console.log(Number(inputyear) + 18)//here still we got string but didnt convert the values into the addtion for that we also have to use number function


console.log(Number('deep'))// here we are trying to convert the number but it showing the error bcs its not num
console.log(String(23))// it will print the number now

//Type Coversion 
// its happens when two values dealing with diffrent types like string and number

console.log('i am deep'+25+'years old')// this callrd type coversion beuse the he can execute te multiple diffrent types of values like number and string togather 