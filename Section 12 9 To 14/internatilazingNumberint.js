//that utilizes the number of the in specefic format of the 
//it basically used for the fomating the currency in the ecromerce website
const num = 3884764.23

console.log('US:',new Intl.NumberFormat('en-US').format(num))

console.log('india:',new Intl.NumberFormat('IST-india').format(num))


console.log('Delhi:',new Intl.NumberFormat('UTC-india').format(num))



console.log('SYRIA:',new Intl.NumberFormat('ar-SY').format(num))