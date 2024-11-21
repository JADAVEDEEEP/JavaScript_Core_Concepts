

//////////////////////////////////////////////DISPLAYING MAPMAKER/////////////////////////////////////////////////////
//map.on is the event that allows to handle events click and all
map.on('click',(mapEvent)=>{
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
    
,()=>{
   alert('Coudnt not match')
}


