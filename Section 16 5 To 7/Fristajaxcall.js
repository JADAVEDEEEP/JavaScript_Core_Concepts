
//this is our first ajax call on contries api on india we done 
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/india');
request.send();

request.addEventListener('load', function () {
  // Parsing JSON data into a JavaScript object
  const data = JSON.parse(this.responseText);

  // Example of accessing data
  data.forEach(country => {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
  });
});

