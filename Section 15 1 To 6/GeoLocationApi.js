
///////////////////////////////////////////////////GEOLOCATION API////////////////////////////////////////////////
//geolocation alos called the browser API 
//usecase : internatinalization ,timers ,GPS,
//we use destrcring to define the objects latittude in to varible 
/*
Latitude and longitude are a coordinate system that 
define the location of a place on Earth by measuring
its angular distance from the equator and the prime meridian

*/ 

if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position)=>{
    const {latitude} = position.coords
    const {longitude} = position.coords
    console.log(`https://www.google.com/maps/place/Maruti+Aamrakunj+2/@${latitude},${longitude},15z/data=!3m1!4b1!4m6!3m5!1s0x395c299cb380ab2d:0xddaf29a69666254e!8m2!3d23.19358!4d72.6095618!16s%2Fg%2F11fsl8ry8x?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D`)
    },()=>{
        alert('Coudnt not match')
    })