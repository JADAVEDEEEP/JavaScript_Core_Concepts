//using string litrels you can asign the multiple strings 


const firstname = 'jonas'
const job = 'teacher'
const birthyear = 1999
const year = 2024

//here is the some varaible and strings are stored some of are contains values some of are just used to represent the multiple strings one line//
//using the + operatore yoyu can store multiple strings//

const jonas = "i'am" +firstname+',a'+ (year -birthyear)+'years old and i am'+job
console.log(jonas)

// this is complex and lengthy thats why we use the templetes litrals to store multi line string
// template litrals can asemble multiple picses in one final string

//`${}`using this syntax we can write the tem litrals

const jonasName = `i am ${firstname}`;// this will store the name of varible you give it
console.log(jonasName)