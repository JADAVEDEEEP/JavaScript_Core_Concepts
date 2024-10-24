//there art lots of data of the map so everytime set would be not help out 
//when its about the multiple values we use the array inside the map instead of the set perameter
//here qwe try the values of n map were its take more adavnce of Es6 featurres 

///////////////////////////////////////MAP THE ARRAY ///////////////////////////////////

const querstion = new Map([
    ['question', 'What is the best programming language'],
    [1, 'c'],
    [2, 'java'],
    [3, 'JS'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again'],
  ]);

  
  ////////////////////////////////////CONVERT MAP TO ARRAY AGAIN//////////////////////////////
  // Log the Map
  console.log(querstion);
  
  // Convert Map to Array
  console.log(Array.from(querstion));

//////////////////////////////////////USING OBJECT AS LITRALS /////////////////////////
//Quizz App
//here wr get the QQuestion and anser in key values format 
//object is not litrals so we convert in to the litrels
for(const [key,values] of querstion){
    console.log(`${key}=${values}`)

    
}
  
//OUTPUT
/*
Map(7) {
    'question' => 'What is the best programming language',
    1 => 'c',
    2 => 'java',
    3 => 'JS',
    'correct' => 3,
    true => 'correct',
    false => 'try again'
  }
  [
    [ 'question', 'What is the best programming language' ],
    [ 1, 'c' ],
    [ 2, 'java' ],
    [ 3, 'JS' ],
    [ 'correct', 3 ],
    [ true, 'correct' ],
    [ false, 'try again' ]
  ]
  question=What is the best programming language
  1=c
  2=java
  3=JS
  correct=3
  true=correct
  false=try again */


  //Map : it will transform each of n array and creates the new array evyery time 

  const numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubled = numbers.map(num => num * 2);

console.log(doubled); //

//FILTER : filter will select the elemetns based on the condtion

const numbers2 = [1, 2, 3, 4, 5];

// Keep only even numbers
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // Output: [2, 4]