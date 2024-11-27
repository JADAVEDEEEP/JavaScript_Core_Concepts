

//using the promises we fetch the latitued and longitude of gelocation 
const getpostion = ()=>{
    return new Promise((resolve,reject)=>{  
     navigator.geolocation.getCurrentPosition(resolve,reject)
      })
    }
  getpostion().then(pas=>console.log(pas))