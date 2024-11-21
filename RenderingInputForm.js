
//////////////////////////////////////////WROKOUT INPUT FORM//////////////////////////////////////////////////////

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    //Declaring the inputs to take values 
    inputDistance.value =inputDuration.value=inputCadence.value=inputElevation.value=''


   console.log(mapEvent)
     //therfore we reteive the objedt lat and lng from the object 
     const {lat ,lng} =mapEvent.latlng
     //on the clcik we set the market so when we clicked it will store mark on map with new object latitude and lonttiude 
L.marker([lat,lng]).addTo(map).bindPopup(L.popup({
    maxWidth:150,
    minWidth:200,
    autoClose:false,
    closeOnClick:false,
    className:'running-popup',
}))
.setPopupContent('Workout')
.openPopup();  
})
inputType.addEventListener('change',()=>{
inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})