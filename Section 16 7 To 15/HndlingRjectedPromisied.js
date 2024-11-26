//Hndling errors only happends when the users internet is off
//when something is wrong catch is trggers the error that promise is rejected 
//asume we change the contries name that doesnt exxit it will trigerd catch easilyonce button clicks 
const getCountryData = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        RenderCountry(data[0])
        const neighbour = data[0].borders ? data[0].borders[0] : null;
        if (!neighbour) return;
  
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
      })
      .then((response) => response.json())
      .then((data) => {
        RenderCountry(data, 'neighbour'); // Render the neighbour country
      }).catch((error) => {
        console.error(`Error: ${error.message}`);
        alert(`Something went wrong: ${error.message}`);
      });

  };

  btn.addEventListener('click',()=>{
    getCountryData('portugal');
  })

