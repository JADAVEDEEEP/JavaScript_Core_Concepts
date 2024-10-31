//FIND METHOD:  find returns the specefic one elment based on the condtion 
//find method only retuns the one element at time and filter retruns all that condtion pass
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const firstwithdraw = movements.find(movements=>movements <0)
console.log(firstwithdraw)