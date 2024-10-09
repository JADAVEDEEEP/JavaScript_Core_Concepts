 /*two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27*/

const calcAverage = (Dolphins_Score,Koalas_score) =>(Dolphins_Score+Koalas_score)/3;

    const Dolphins_Score =calcAverage(44,23,71)
    const Koalas_score = calcAverage(65,54,49)
    console.log(Dolphins_Score,Koalas_score)
    
    const checkWinner = function(Dolphins_Score,Koalas_score){
    if(Dolphins_Score >=2* Koalas_score)
    {
        console.log(`Dolphins win${Dolphins_Score} vs.${Koalas_score}`)
    }else if(Dolphins_Score>=2*Koalas_score)
    {
        console.log(`Kaolas win${Koalas_score} vs.${Dolphins_Score}`)
    }else{
        console.log('no wins')
    }

}
checkWinner(Dolphins_Score,Koalas_score)
//here is acceoding to the tes data change the values it will show the who will in the condtion once dolphins iwns and once kaloas win