//Rest elemetns are used to pack the array element 



//we can store spred om right side that equals to assigenment operator
const arr = [1, 2, ...[3, 4]];  // arr becomes [1, 2, 3, 4]

const [a, b, ...others] = [1, 2, 3, 4, 5];  // a=1, b=2, others=[3, 4, 5]

console.log(a, b, others);  //

//rest parrtent conlect unused elemetns in array
//here is the example with rest perameter that we used to store rest permeters were in log we didint use the spread 
const arra1 = [1,2,...others,...arr]
console.log(1,2,others,arr)

//OUTPUT OF REST PERMENTERS
//1 2 [ 3, 4, 5 ] [ 1, 2, 3, 4 ]
//we log the spread operatoer so now all values will fre from array it store the idivusal
const arra2 = [1,2,...others,...arr]
console.log(1,2,...others,...arr)

//OURPUT OF SPREAD OPERATOR 
//1 2 3 4 5 1 2 3 4

//rest with pack balues 
const objects = {
    arrys: [1,...others,1,2],
    arrrysd : [1,2,3]
}

console.log(1,objects.arrys)


//function 
const othersd = ['deep','raju']
const arrysds = [1,2,3,4,5]//this is rest perameters 
function array (...args){
return args
}
console.log(array(arrysds))//this is the spred operatoer 
console.log(array(othersd))

const array2 = [1, 2, 2, 3, 4, 5,];

function array(...args) {
  return args;
}

console.log(array(...array2)); //
//REST PEREMETER EXAMPLE THAT WIL STORE ALL THE ELEMENTS IN TO ARRAY

const arrays = [1,2,3,4,5,...array2]
console.log(arrays)

//NOW WE USED THE SPREAD OPERATOR IT WILL STORE THE REST PERMETER ALSDO IN IDNDVUSAL

const arrays1 = [1,2,3,4,5,...array2]
console.log(...arrays1)


//OUTPUT
/*
1 2 [ 3, 4, 5 ]
1 2 [ 3, 4, 5 ] [ 1, 2, 3, 4 ]
1 2 3 4 5 1 2 3 4
1 [ 1, 3, 4, 5, 1, 2 ]
[ [ 1, 2, 3, 4, 5 ] ]
[ [ 'deep', 'raju' ] ]
[ 1, 2, 2, 3, 4, 5 ]
[
  1, 2, 3, 4, 5,
  1, 2, 2, 3, 4,
  5
]
1 2 3 4 5 1 2 2 3 4 5*/