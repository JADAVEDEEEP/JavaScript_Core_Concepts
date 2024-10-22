let resturent = {

    namne2 : '3D chinise store',
    categroes2 : ['italain','braxalian','chipolate'],
    menu2 : ['pasta','milk','bread'],

    
order:function(starterIndex,MainIndex){
   return [this.categroes[starterIndex],this.menu[MainIndex]]
}
}
//it will all store the values inside the resturent 
//to destruc the objects we used rhe curely brackes 
//this is the destructrung the main example of that we can store the our object values inside of our object creating varible and pasising assigment object to that 
const {namne2,categroes2,menu2} = resturent
console.log(namne2,categroes2,menu2)
