const deep2 = [
    'rahul',
    'morgan',
    2000,
    22,
    'Ahemdabad',
    true,
   ['deep','ratan sir'],
]
for(let i=0;i<6;i++){
    console.log(deep2[i])
}
// this how we sotre arrays in loop 

// cotinue statment

//it will stop the executen and remove the on element and cotiner the next loop without that element 

let i
for(i=0;i<=10;i++)
{
    if(i==5){
     continue
    }
    console.log(i)
}

//Break Statment 
//it will break the loop from the execution on give contion

let i2
for(i2=0;i2<=10;i2++)
{
    if(i2==5){
     break
    }
    console.log(i2)
}