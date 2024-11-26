/* chaning promises :promise chaning can allow us to execute multiple Async operation at the mean time with then and promies */ 


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
      });
  };
  
  getCountryData('portugal');
  