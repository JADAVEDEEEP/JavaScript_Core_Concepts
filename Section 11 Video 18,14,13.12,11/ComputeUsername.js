//here we just tey to comuting the name using fhe first alphbet should be lowecase we use the split and map we alos 
//r&d the how we can optmize clean code using arriw function it would be finish within one line 


const createusername = function(accounts){
    accounts.forEach(function(accounts){
      accounts.username=accounts.owner
    })
    const username= user.toLowerCase().split(' ').map(name=>name[0] ).join('')
    return username
  }
  console.log(createusername(accounts))