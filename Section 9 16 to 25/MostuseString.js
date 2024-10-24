//SPLIT : WLLOS US TO SPLIT IN MULTIPLE PARTS
//it will split all this string in array nad new string 
    console.log('deep+jadav+jadav+gas'.split('+'))

    //JOIN MAIN STRING
    //join will be us to add the elment every part of an array 
    //it wil not change the orignal array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text)

  //PADSTART STRING 
   //add some array to the begning of string
   const message= 'i am deep jadav'
   console.log(message.padStart(25,'+'))   


   //REPEAT STRING 
    //IT WILL RETUN STRING MULTIPLE TIMES 
   const message3= 'i am deep jadav'
   console.log(message.repeat( 5 ))   

   //CONCAT STRING
   //MERGE MULTIPLE STRINGS
   let text1 = "Hello";
   let text2 = "world!";
   let text3 = "Have a nice day!";
   let result = text1.concat(" ", text2, " ", text3);
   console.log(result)