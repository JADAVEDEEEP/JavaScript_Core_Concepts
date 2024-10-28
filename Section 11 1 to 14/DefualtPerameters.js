//sometimes we set the perameters as defualt so we dont have to set them everytime
//when we pass the defualt prameter inside the function when there is no peremmeter inside of function thats called the   

const bookings = []
const createbookings = function(Flightname,bumpassang,price)

{
    const booking= {
        Flightname,
        bumpassang,
       price,
    }
    console.log(bookings)
    bookings.push(booking)
} 


createbookings('LH123')
