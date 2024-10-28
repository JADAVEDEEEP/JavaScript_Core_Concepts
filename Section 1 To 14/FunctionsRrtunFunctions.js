//function will retun the new function 
//here we pass two function and we sotre the first values of greet is hii and second is name that will store both functiion valurs 

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}
//here as yiu can see the deep will store our retun function values 
const deep = greet('Hi Guys I Am')
deep('deep jadav')

//how is he know the order of first function and then store the order of second function so it wil becuse of closures