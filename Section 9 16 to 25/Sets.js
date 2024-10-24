//sets are are the data strcuture in javasctipt 
//set is the cokketion of uniqe values
//no duplicates values 
//set can holds mix data type
const orderSet = new Set(['pizza','deep','pasta','pizza'])
console.log(orderSet)

//set can be stored the relevent uniqe values no duplicated 
//the size will be stored the number of size can be store
//only diffrance between arrqy and sets its just the array can store duplicates values but sets cant

console.log(orderSet.size)

//has will retrive the data from set if its already exit in to the sets
console.log(orderSet.has('pizza'));
console.log(orderSet.has('deep'));

//add the set element in sets bread 
orderSet.add('bread')
console.log(orderSet)


//delete the elmements 

orderSet.delete('bread')
console.log(orderSet)


//Retrive the data from the sets but no duplicate values 

for (const order of orderSet) console.log(order)

    //example 

    const staff = ['water','deep','jadav','fax','water','deep']
    const staffUniqe = new Set(staff)
    console.log(staffUniqe)

