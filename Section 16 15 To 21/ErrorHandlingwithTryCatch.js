/*Try : try will be start executing the block and that wont appear without catch

catch : catch would nbe handle the cuase of try if he is suceesd then it wont print any error 
othrwise it print error 

*/ 
//Syntax
try{
    let y=1
    const x=2
    x=3   
}catch(err){
    alert(err.message)
}
//output
//error becuse inslize const who is cant changabale 


  const whereAmi = async (country) => {
  try {
    // The first await will wait for the response
    const response = await fetch(`https://restcountries.com/v2/name/${country}`);
    // The second await will wait to parse the response into JSON data
    const data = await response.json();
    RenderCountry(data[0]);

    const [neighbour] = data[0].borders || [];
    if (!neighbour) return;
    const neighbourResponse = await fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    const neighbourData = await neighbourResponse.json();

    RenderCountry(neighbourData);
  } catch (err) {
    console.log(err);
  }
};


btn.addEventListener('click', () => {
  whereAmi('portugal');
});






