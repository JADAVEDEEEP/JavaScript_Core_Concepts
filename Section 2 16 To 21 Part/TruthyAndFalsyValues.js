//falsy values : they not actully false values but we try to convert thenm into boolean then he became falsy values 
// 5 falsy values
/* 1. 0
    2. ''
    3. undefined
    4. null
    5. nan : Not a number */  

    //any of them not 0 or null string will be known as the truthy values


    console.log(Boolean(0))//it comes false bcs we try to convert the falsy values in to the boolean
    console.log(Boolean(undefined))//it same will come false becuse its fslsy values
    console.log(Boolean('jonas'))//empaty string is falsy but string is not so it will come out truth
    console.log(Boolean({}))//empty object is truthy values since not been part of falsy
    console.log(Boolean(''))//this result will come out falsy bcs it falsy values

    //to convert boolean values is always in type coersion 
    //type coersion tow secnarios
    //1. Logical operator & logical contacts
    
    const money =0/100//the reason behind that value converted becus its falsy boolean values as result else block executed
    if(money){
        console.log("dont spend")
    }
    else{
        console.log("get job")
    }
    //100 is the truthy values so it will retun truth and the first statment will be executed