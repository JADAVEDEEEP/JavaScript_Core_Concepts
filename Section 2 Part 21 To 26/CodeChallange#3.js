/*There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 
112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 10*/

//  EXECUTION //


//---------------------------------------------------------------------------- TEST DATA 1--------------------------------------------------------------

const Dolphins = (96+108+89)/3
const Koalas = (88+91+110)/3 // Within first test data Dolphins are winning with lead of one point 
console.log(Dolphins,Koalas)

//OUTPUT
//97.66666666666667 96.33333333333333 DOLPHIN WON THIS TIME 

//----------------------------------------------------------------------------BONUS-1-----------------------------------------------------------------

//WITH Bonus -1 

//wtihin bonus 1 Kalos would be the winner

// const Dolphins = (97+112+101)/3
// const Koalas = (109+95+123)/3
// console.log(Dolphins,Koalas)

// if(Koalas && Dolphins >=100)
// {
//     console.log(`Koalas is wining withoin score of ${Koalas} in compare of Dolphins score is${Dolphins}`)
// }

// OUTPUT //
/*
103.33333333333333 109
Koalas is wining withoin score of 109 in compare of Dolphins score is103.33333333333333*/

//-------------------------------------------------------------------- BONUS-2-----------------------------------------------------------------------

//WITH Bonus -2

//AS PER THE CALCULATION WITHN BONUS 2 BOT ARE SCORED TIE

// const Dolphins = (97+112+101)/3
// const Koalas = (109+95+106)/3
// console.log(Dolphins,Koalas)

// if(Koalas && Dolphins >=100)
// {
//     console.log(`Koalas and dolphins socre are Tie with score of ${Koalas} and ${Dolphins}`)
// }
//OUTPUT
/*103.33333333333333 103.33333333333333
Koalas and dolphins socre are Tie with score of 103.33333333333333 and 103.33333333333333

*/

