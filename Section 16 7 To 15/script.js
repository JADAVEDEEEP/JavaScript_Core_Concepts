const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');



const RenderCountry = (data)=>{
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 100000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
`;

// Use insertAdjacentHTML to insert the HTML string
countriesContainer.insertAdjacentHTML('beforeend', html);

// Make the container visible
countriesContainer.style.opacity = 1;
}


/////////////////////////////////USING XHTTTPML NESTED CALLBACKS ///////////////////////////////
/////////////////////////////////////////////////////NESTED CALLBACKS ////////////////////////////////////////////
//ajax call country 1 
const getcountryAndNebiour = (country)=>{
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();

request.addEventListener('load', function () {
    // Parse the response into JSON
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    RenderCountry(data)
    
    //Get the neghbiour country 
    // this is refer the neghbiour country within arrya so we destricture dthe array 
    const [neighbour] = data.borders; // Extract the first neighbor from the borders array

    if (!neighbour) return; // If no neighbors exist, exit the function
    
    // Fire the second AJAX callback function to fetch neighbor data
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText); // Parse the response to JSON
      console.log(data2); // Log the neighbor data to the console
      RenderCountry(data2)
    });
    
   
});
}
btn.addEventListener('click',()=>{
    getcountryAndNebiour('usa')
})



///////////////////////////////////////////////////PROMISES AND Fetch Apis////////////////////////////////////////////
/*promises : promises provides the completion and faliure of Async js 

--> its over come the nested callbaks using probdinge the states of pending

Fetch Api : Fetch made Requst to any url or Apis to the web server and get the respnce 

Then : is work with the promises to handle success and falure of respnces 

Optiinal chaning : its used to store api result undefined or null instrad of balcoing code with error 

promise : Acontainer for future value who retun the rreults or responce with pending state 
--> we no longer have to relie on the call backfunction and evenlistners 
--> we can chain promiies instead of the nested callbacks that over come by promises  
--> types of promisies 
1. fulldield promisies
2. rejected promisies 

*/
/////////////////////////////////////////////////////USING THEN AND PROMISES MULTIPE ASYNC OPERATION  ////////////////////////////////////
//it will used to the fetch the data from the newtweok weere he will genreate promise with pending state 
// const request = fetch('https://restcountries.com/v2/name/portugal')
// console.log(request)
//here we created two diffrent promise with diffrent outcome 
const getCountryData = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        RenderCountry(data[0]);
        const neighbour = data[0].borders ? data[0].borders[0] : null;
        if (!neighbour) return;
  
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
      })
      .then((response) => response.json())
      .then((data) => {
        RenderCountry(data, 'neighbour'); // Render the neighbour country
      })
      .catch((error) => {
        const errorMessageElement = document.getElementById('error-message');
        errorMessageElement.textContent = `Something went wrong: ${error.message}`;
        errorMessageElement.classList.add('visible'); // Show the error message
      });
  };
  
  btn.addEventListener('click', () => {
    // Hide the error message if it's visible
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.classList.remove('visible');
  
    // Fetch the country data
    getCountryData('portugal');
  });
  
  

  