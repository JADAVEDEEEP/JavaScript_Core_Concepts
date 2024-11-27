//most easist way to consume promises in Es20202 is the Async Await 

/////////////////////////////////////////////////////ASYNC AWAIT///////////////////////////////////////////
  /*Asucn: a function is keep running in the background by perfoming the 
  operation its autometiclly retruns the promise
  
  Await : await will stop the execution of code untill promise is fulfiled 
  it wont stop execution main thread it will still run in call stakc thats 
  most advantage of async await that he cant stopr execution 

  */ 
  const whereAmi  = async (country)=>{
    //the first await will wait for the responce 
     const response =  await fetch(`https://restcountries.com/v2/name/${country}`)
    //the second await will wait for the parse reponse in to the JSON data
    const data = await response.json(); 
    RenderCountry(data[0]);
  
    const [neighbour] = data[0].borders || [];
     if (!neighbour) return; 
     const neighbourResponse = await fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
     const neighbourData = await neighbourResponse.json(); 
  
     RenderCountry(neighbourData); 
  }
     btn.addEventListener('click',()=>{
     whereAmi('portugal')
  })