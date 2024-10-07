//THIS IS FUNCTUON DECLARATION

// this is called local perameter tht we define inside our function 
function calage1(birthyeah){
return  2037- birthyeah
}
const age1=calage1(1991)//here we call the function and declare the value
//we define the variable to store the return value



// FUNCTION EXPRESSION

//this is the srcond way can define the function within expression using varible
const calage_two = function (birthyeah){//this function called anumymonus function without name
    return  2037- birthyeah//this all things we called the expression that prodecues the values
}
const age2 = calage_two(1991)

console.log(age1,age2)

//function is just tje values its boolean,string or number


//DIFFRANCE BETWWEN THEM

//function declertion basically we can execute before its declared

//function expreesion will show the error its example of hosting


