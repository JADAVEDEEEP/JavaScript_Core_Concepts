const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  ////////////////////////////////////////////////// STORE USER PROFILE INSIDE OF ARRAY ////////////////////////////////////////
  const accounts = [account1, account2, account3, account4];
  

//flat : flat method used to nested arrays into one single unit of array
//this is only goes one level deep of nested 
const arr = [[1,1,2,2,3],[3,3,4,4,5],7,7]
console.log(arr.flat())

//here we went in more deep in this were we selected 2 it will print again same like what flat does
const arrDeep = [[[1,1,2,2,3]],[[3,3,4,4,5],7,7]]
console.log(arrDeep.flat(2))

const accountmovments = accounts.map(acc=>acc.movements)
console.log(accountmovments)
const allmovments = accountmovments.flat()
console.log(allmovments)
const overaallbalance = allmovments.reduce((acc,mov)=>acc+mov,0)
console.log(overaallbalance)