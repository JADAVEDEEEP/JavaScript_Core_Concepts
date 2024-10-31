

// here we trying to convert the euro in to usd using map method 
//map : map is alos another way of looping arrays 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
   const euroTOusd =1.1
   //we did using Arrow  functional programimg in online programing
   //using arrow function you can define your pices of code in just one line 
   const movmentusd = movements.map=mov=> mov * euroTOusd
   
    console.log(movements)
    console.log(movmentusd)
//we did using using looping array 
    const momvmentsusdfor = []
    for(const mov of movements) momvmentsusdfor.push(mov*euroTOusd)
      console.log(momvmentsusdfor)
  