//pobjects is just like array store the diffrent kind of the data 
//they can even store object isndie the object and array also
//we can even add function in to the object
//any function attached to a object its clled the method
//dont repeat the key value pairs values it not good coding standards
//just make sure the object will not repeat multiple times it will show the eror
const deep = {
    firstname:'rahul',
    lastname:'morgan',
    birthyeah:2000,
    age:22,
    Location:'Ahemdabad',
    haslinces:true,
    raka:['deep','ratan sir'],

    calAge:function(){// we define the functon name inside the deep object so just like key value oaris just like name is not variable but je is property of the deep object
        this.age=2033-this.birthyeah //we us the "." to create new propties
        return this.age
        //since we have this keyword it would store the value multiple times becuse it is takes refrences of n object
//here we pass the this keyword to refecne n object
},
  
    
}
console.log(deep.age)//here deep is object and that calling the method of calage
console.log(deep)