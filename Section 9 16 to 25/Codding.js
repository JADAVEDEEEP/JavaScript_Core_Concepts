/*Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time). 
Your tasks: 
1. Create an array 'events' of the different game events that happened (no 
duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: 
⚽
 GOOD LUCK 
�
�
 GOAL*/

 /*1. Create an array 'events' of the different game events that happened (no 
    duplicates) */
    const game = new Map([
      [1, 'game'],
      [2, 'substitute'],
      [1, 'game'],
      [2, 'substitute'],
      [1, 'game'],
      [6, 'GK'],
      [7, 'goal'],
      [8, 'yellow card'],
      [9, 'red card'],
      [10, 'red card'] 
  ]);
  
  console.log(game);

  const events = [new Set(game.values())]
  console.log(events)


 /* 2.. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. */

game.delete(8)

/*.3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) */ 

console.log(`An event happend ,An avarage ,every ${90/game.size}`)

/*4.. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: 
⚽*/ 
for(const [key,values] of game){
  console.log(`[FIRST HALF]=${key}:${values}`)
  console.log(`[SECOND HALF]=${key}:${values}`)
}