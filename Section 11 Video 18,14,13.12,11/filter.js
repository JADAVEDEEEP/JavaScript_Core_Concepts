///filter method : here we us the filter method and  pass th condtion > 0 now whoever is the postive number it will selected by the filter method and alos will print only that method 


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const deposit = movements.filter(function(movements){
    return movements > 0
  })
  
  console.log(deposit)
  