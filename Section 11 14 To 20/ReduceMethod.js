//reduce method boil out all the array elment values in to one simgle unit 
//it just like store multiple array elments in single array like multplication 
const movmenets = [200, -200, 340, -300, -20, 50, 400, -460]
console.log(...movmenets)

//in reduxe first peremeter always been known as the acumletor its like snow ball 
//acumlator is just value that we would b added to every time 
//redecue call the call back function and it will pass the eaach of elment that will retrun the values 
const balance = movmenets.reduce(function(acc,curr,i,arr){
console.log(`iteration ${i}:${acc}`)
    return acc+curr
},0)

console.log(balance)
let balance2 = 0
for (const mov of movmenets)balance2+=mov
console.log(balance2)
