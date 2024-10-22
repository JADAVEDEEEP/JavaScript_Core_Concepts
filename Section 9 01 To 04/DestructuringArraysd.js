
//destructring array is just way to store the data and retive from the object of the created 
const resturent = {

    namne : '3D chinise store',
    categroes : ['italain','braxalian','chipolate'],
    menu : ['pasta','milk','bread'],

    
order:function(starterIndex,MainIndex){
   return [this.categroes[starterIndex],this.menu]
}
}
//here we send the abc array to xyz array thats the way we can desstcturing array
const arr= [2,3,4]
const a = arr[0]
const b = arr[1]
const c = arr[2]
//assign one values to multiple without halming origanal array its called array desrcurting 
const [x,y,z] = arr//this known as the destructring 
console.log(x,y,z)
console.log(arr)

//this how you can dessturctring the data of the array we fetch first tow elements of n array of catrgeroes  

let [main, secondary] = resturent.categroes
console.log(main,secondary)
//since we swith the array destructung it would ne swith the array elements
// const temp = main
// main = secondary
// secondary = temp

// console.log(main,secondary)



//fucntion desctrcrung retun mustpile values

const [starter,menu ]=resturent.order(0,2)
console.log(starter,menu)

//if we have both array nested and we wanted saprated so we do destructing 

const nested =[1,2,[4,5]]
// const [i,j]=nested
// console.log(i, j)
//here we destructued the array
const [i,,[j,k]]=nested
console.log(i,j,k)