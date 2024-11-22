

/////////////////////////////////////////////XHMLREQUEST/////////////////////////////////////

//this is our first ajax call on contries api on india we done 
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/india');
request.send();

request.addEventListener('load', function () {
    //here will be get the data in to jason format 
  console.log(this.responseText);

  const data = JSON.parse()
});
