//maps is the values to we csn use that for the map the values 
//objects maps jhas the big difrrance is just bojects is just store the string
//while the map can any type of the key like objets ,maps,string
//it allows to store any data type 
//with set method  is return the updated map values
//set alloes to reteive the date of the msap like same as updated
const resturent = new Map();
resturent.set('name','italiaono')
resturent.set(1,'deep jadav')
resturent.set(2,'rahul modi')
console.log(resturent)


resturent.set('categories',['pizza','deep','pasta','pizza'])
.set('open',11)
console.log(resturent.get('name'))
console.log(resturent.get('categories'))
resturent.clear(resturent.size)