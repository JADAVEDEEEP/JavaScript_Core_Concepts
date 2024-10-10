/**Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK */

const BMI = {
    marks_mass :78,
    Height:1.69,
    jhons_mass:92,
    Height:1.95,

    calbmi:function(){
     mark_bmi =78/1.69**2
     jhons_bmi =92/1.80**2
     console.log(`John's BMI ${jhons_bmi} is higher than Mark's ${mark_bmi}`)
    }
}
BMI.calbmi()

