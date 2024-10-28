//sometimes we set the perameters as defualt so we dont have to set them everytime

const bookings = []
/////////////////////////////////////DEFUAKLT PEREMETERS AND VALUES ES6 METHOD////////////////////////////////////////////
const createbookings = function(Flightname,bumpassang =1,price=199)
//here we use the function expresion and pass the defualt perameters to get the values in based of the array object that we passed iside the bookings array

{
    /////////////////////////////////////////////////DEFUALT VALUES ES5 WAY//////////////////////////////////////////////////////////////////
    //ES 5 WAY
    // bumpassang =bumpassang || 1;
    // price =price || 199;
    const booking= {
        Flightname,
        bumpassang,
       price,
    }
    console.log(bookings)
    bookings.push(booking)
} 


createbookings('LH123')
createbookings('LH121')
createbookings('LH122')
createbookings('LH124')

////////////////////////////////////PASSING ARGUMENTS WORKING AS VALUES VS REFRENCE /////////////////////////

const flight = '2334ef'
const deep = {
    name : 'deep jadav',
    passport : 2434345454
}

const checkin = function (flightnum,passnger)
{
 flightnum = 'LH099'
 passnger.name="Mr" +passnger.name 
 
if(passnger.passport === 2434345454){
alert('checkin')
}else{
    alert('Kikecout')
}
}
checkin(flight,deep)
console.log(flight)
console.log(deep)