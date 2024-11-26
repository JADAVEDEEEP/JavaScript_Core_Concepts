////////////////////////////////////////////////////CONSUMING PROMISIES ////////////////////////////////////
//it will used to the fetch the data from the newtweok weere he will genreate promise with pending state 
// const request = fetch('https://restcountries.com/v2/name/portugal')
// console.log(request)
//here we created two diffrent promise with diffrent outcome 
const getcountryData = (country) => { 
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data)=>RenderCountry(data[0]))
    }

getcountryData('portugal');
