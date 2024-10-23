//this are the new Es6 assignment operator
//asume that we get thst from apis
const rest1 = {
    name : 'capri',
    guest:0
}

const rest2 = {

    name:'fasal',
    owner:'rahul'

}

// rest2.name = rest1.guest ||10
// rest1.name = rest2.owner ||10
/////////////////////////////////////////LOGICAL OR///////////////////////////
rest1.guest ||=10
rest2.guest ||=10

console.log(rest1)
console.log(rest2)

//////////////////////////////////////////LOGICAL AND///////////////////////////////////////
//GUEST IS FULYS VALUES AMF ONWER IS TRUTH THTS WHY STRINH STORED THE DEEP
const deep = rest1.guest && rest2.owner && 'deep'
console.log(deep)