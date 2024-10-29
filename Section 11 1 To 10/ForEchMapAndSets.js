//Map : map used to map the values from the array 
//set : set will store the values uniqly in array with no duplicates allowed 


/////////////////////////////////////////MAP WITH ARRAYS OF ARRAYS////////////////////////
const currncies = new Map([
    ['usd','united states dollor'],
    ['EUR','EURO'] ,
    ['GBP','Pound sterling'],
])

currncies.forEach(function(value,key){
  console.log(`${key}: ${value}`)
})

/////////////////////////////////////////SET WITH ARRAYS OF ARRAYS////////////////////////
const currncies2 = new Set(['EURO','GBP','RUPPES','EURO','GBP','RUPPES'])
console.log(currncies2)
currncies2.forEach(function(value,key){
    console.log(`${key}: ${value}`)  
})



