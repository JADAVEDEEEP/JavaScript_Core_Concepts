//is a brunch of computer scince uses true and false values to solve complex problems
// most logical operator is "And" "Or" and "not"

//BOOLEAN AND

//if both operation will true the result will come out true
//if one is false result will be false 
//if both operation is ill be false it will come out false 

let sarahage = 18
let sarah_birthyear = 2006

if (sarahage >= 18 && sarah_birthyear >= 2006)// this both condtion ate true
{
   console.log(true)
}
 else 
 {
    console.log(false)
 }

 //BOOLEAN OR

//or contains either one or second condtion could be true for result come true 
//much needed only one operation could be true 

let sarahsage = 28
if(sarahsage >=28 || sarahsage < 28)//sarahs age 28 is filing the condtion but second one is false still on based on one condtion we wll get the result would be true
{
    console.log(true)
}
else{
    console.log(false)
}

 //BOOLEAN NOT
 //WHOWVWER IS THE FALSE VALUE BECOMES TRUE OR FALSE
 const ral = !true// this is the false value and we pass not operator since is not falase now its become true 
 const rals = true

 console.log(ral,rals)
