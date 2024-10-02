/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76*/

//§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall

let Marks_mass = 78
let Marks_Height = 1.69

let Jhons_mass = 92
let Jhons_Height = 1.95 

const markBMI = Marks_mass/Marks_Height ** 2
const jhonBmi = Jhons_mass/Jhons_Height ** 2 

// const jhonBmi = Jhons_mass/Jhons_Height**2 // i had 
let markHigherBMI = markBMI > jhonBmi;

console.log(markBMI,jhonBmi,markHigherBMI)

/* there is the conclusion jhon is has more mass and height then mark but we have to show the mar has the high bmi then jhon 
we will divide mass with height we applied **2 power to both but still mark hase high bmi

logic : jhon height is higher since height is greater is always reduce the BMI of jhon doesnt matter if its got high mass and height*/

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76

let Mark_mass = 95
let Mark_Height = 1.88

let Jhon_mass = 85
let Jhon_Height = 1.76 

const markBMIs = Mark_mass/Mark_Height ** 2
const jhonBmis = Jhon_mass/Jhon_Height ** 2

// const jhonBmi = Jhons_mass/Jhons_Height**2 // 
let markHigherBMIs = markBMIs > jhonBmis;

console.log(markBMIs,jhonBmis,markHigherBMIs)

//conclusion : since the marks heigh is greater than jhon bmi wil be low for tbe mark and its increse the bmi of jhon becus of less height