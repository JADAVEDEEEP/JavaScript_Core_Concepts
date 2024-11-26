const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');



const getcountrydata = (country)=>{

3
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();

request.addEventListener('load', function () {
    // Parse the response into JSON
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Create the HTML structure as a string
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
});
}
getcountrydata('portugal')
getcountrydata('usa')