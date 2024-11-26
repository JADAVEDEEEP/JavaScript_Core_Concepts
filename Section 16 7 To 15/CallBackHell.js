/*call backs hell is basically when appears the there multiple 
Async operation would be apprars or callbacks would be apprears which 
i make more diffucukt to understand the code  */


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
    getcountryAndNebiour('usa')
    