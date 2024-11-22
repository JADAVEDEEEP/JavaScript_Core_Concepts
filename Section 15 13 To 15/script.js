

class Workout {
    date = new Date();
    id = (Date.now()); 
  
    constructor(coords, distance, duration) {
      this.coords = coords;
      this.distance = distance;
      this.duration = duration;
   
    }
    _SetDescription(){
      
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]}
      ${this.date.getDate()
      }`
    }
  }
  
  class Running extends Workout {
    type = 'running'
    constructor(coords, distance, duration, cadence) {
      super(coords, distance, duration);
      this.cadence = cadence;
      this.calcPace();
      this._SetDescription()
    }
  
    calcPace() {
      // min/km
      this.pace = this.duration / this.distance;
      return this.pace;
    }
  }
  
  class Cycling extends Workout {
    type='cycling'
    constructor(coords, distance, duration, elevationGain) {
      super(coords, distance, duration);
      this.elevationGain = elevationGain;
      this.type = 'cycling'
      this.calcSpeed();
      this._SetDescription()
    }
  
    calcSpeed() {
      // km/h
      this.speed = this.distance / (this.duration / 60);
      return this.speed;
    }
  }
  
  const run1 = new Running([39, -10], 5.2, 24, 178);
  const cyc1 = new Cycling([39, -10], 24, 97, 178);
  
  console.log(run1, cyc1);
  
//////////////////////////////////////////////////////////APPLICATION ARCITACTURE //////////////////////////////////////////

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation')

class App {
    #map;
    #mapEvent
    #mapZoomLevel=13
    #workouts = [];
    constructor(){
        this._getposition();

        this._getLocalStorage();
        //this keyword is attatch with form but since we want to rund globally we have to use bind to App class
        form.addEventListener('submit',this._newWorkout.bind(this))
        //DOM TRAVESING USING INPUT TYPE 
        inputType.addEventListener('change',this._toggleElevetaionField)
        containerWorkouts.addEventListener('click',this._movTopopup.bind(this))
    }
    ///////////////////////////////////////////////////////////GET POSTION METHOD//////////////////////////////////////
    _getposition(){  

    if(navigator.geolocation)
    //sinde we bind the load map with this key word it will use to take all the varible refrcne s that will assigned without showing undefined 
    navigator.geolocation.getCurrentPosition(this._laodmap.bind(this),()=>{
    
    },()=>{
        alert('Coudnt not match')
    })
    }

    _laodmap(position){
    const {latitude} = position.coords
    const {longitude} = position.coords
    console.log(`https://www.google.com/maps/place/Maruti+Aamrakunj+2/@${latitude},${longitude},15z/data=!3m1!4b1!4m6!3m5!1s0x395c299cb380ab2d:0xddaf29a69666254e!8m2!3d23.19358!4d72.6095618!16s%2Fg%2F11fsl8ry8x?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D`)
    
    const Cords = [latitude,longitude]
    
     this.#map = L.map('map').setView(Cords, this.#mapZoomLevel);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);
    
    //map.on is the event that allows to handle events click and all
     this.#map.on('click',this._showform.bind(this))
    
    /////////////////////////////////////////////SHOW FORM METHOD/////////////////////////////////////////////////////
}    
    _showform(mapE){
        this.#mapEvent=mapE;
            //whenever this click his happent one activity form will me show inside the side bar 
          form.classList.remove('hidden')
    }
    _hideForm(){
      inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';
      form.style.display='none'
      form.classList.remove('hidden')
      setTimeout(()=>form.style.display='grid',1000)
    }
    
    //////////////////////////////////////////////////TOGGLE METHOD ////////////////////////////////////////////////////

    _toggleElevetaionField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

     /////////////////////////////////////////////////////NEW WORKOUT METHOD////////////////////////////////////////////

    _newWorkout(e){

        const validInputs = (...inputs)=>inputs.every(inp=>Number.isFinite(inp))
     e.preventDefault()

      //Data get 
       const type = inputType.value
       const distance = +inputDistance.value
       const duration = +inputDuration.value
       const {lat ,lng} =this.#mapEvent.latlng
       let workout

      //cheak if dat is valid 


      //if activity is runnig create running object 
      if(type==='running'){
        const cadence = +inputCadence.value
        if(!validInputs(distance,duration,cadence))
        return alert('input is not positve')
        workout = new Running([lat,lng],distance,duration,cadence)
      
      }
      if(type==='cycling'){
        const elevation = +inputElevation.value
        if(!validInputs(distance,duration,elevation))
        return alert('input is not positve')
        workout = new Cycling([lat,lng],distance,duration,elevation)
      }
      this.#workouts.push(workout)
      console.log(workout)
      ///if cycling is cycling create cycling object 

      //ADD NEW OBJECT WORKOUT ARRAY
      this._renderWorkout(workout)
      //RENDER workout map as maker 
      this._renderWorkoutMarker(workout)
      //therfore we reteive the objedt lat and lng from the object 
      this._setLocalStorage();

      //Declaring the inputs to take values and clean the values 
      this._hideForm()
 }  
 _renderWorkoutMarker(workout) {
  L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
    )
    .setPopupContent(
      `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.type}`
    )
    .openPopup();
}


_renderWorkout(workout) {
  let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

  if (workout.type === 'running')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

  if (workout.type === 'cycling')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

  form.insertAdjacentHTML('afterend', html);
}
_movTopopup(e) {
  const workoutEl = e.target.closest('.workout');
  if (!workoutEl) return;

  // Convert dataset.id to a number for comparison
  const workout = this.#workouts.find(
    work => work.id === Number(workoutEl.dataset.id)
  );

  if (!workout) return; // Handle case where no matching workout is found

  this.#map.setView(workout.coords, this.#mapZoomLevel, {
    animate: true,
    pan: {
      duration: 1,
    },
  });
}

_setLocalStorage() {
  localStorage.setItem('workouts', JSON.stringify(this.#workouts));
}

_getLocalStorage() {
  const data = JSON.parse(localStorage.getItem('workouts'));

  if (!data) return;

  this.#workouts = data;

  this.#workouts.forEach(work => {
    this._renderWorkout(work);
  });
}

reset() {
  localStorage.removeItem('workouts');
  location.reload();
}
}


   

//since the map loads constrcutore will ge the postion and create the object 
const app = new App()

///////////////////////////////////////////////////GEOLOCATION API////////////////////////////////////////////////
//geolocation alos called the browser API 
//usecase : internatinalization ,timers ,GPS,
//we use destrcring to define the objects latittude in to varible 
/*
Latitude and longitude are a coordinate system that 
define the location of a place on Earth by measuring
its angular distance from the equator and the prime meridian

// */ 
// ///////////////////////////////////////////////////////////////CURENT LOCATION ///////////////////////////////////////////////////////////////
// if(navigator.geolocation)
// navigator.geolocation.getCurrentPosition((position)=>{
// const {latitude} = position.coords
// const {longitude} = position.coords
// console.log(`https://www.google.com/maps/place/Maruti+Aamrakunj+2/@${latitude},${longitude},15z/data=!3m1!4b1!4m6!3m5!1s0x395c299cb380ab2d:0xddaf29a69666254e!8m2!3d23.19358!4d72.6095618!16s%2Fg%2F11fsl8ry8x?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D`)

// const Cords = [latitude,longitude]

//  map = L.map('map').setView(Cords, 15);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


// //////////////////////////////////////////////HANDLING CLICKS ON MAP/////////////////////////////////////////////////////
// //map.on is the event that allows to handle events click and all
//      map.on('click',(mapE)=>{
//         mapEvent=mapE;
//         //whenever this click his happent one activity form will me show inside the side bar 
//       form.classList.remove('hidden')
//      })  
// },()=>{
//     alert('Coudnt not match')
// })

// //////////////////////////////////////////WROKOUT INPUT FORM//////////////////////////////////////////////////////

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     //Declaring the inputs to take values 
//     inputDistance.value =inputDuration.value=inputCadence.value=inputElevation.value=''


//    console.log(mapEvent)
//      //therfore we reteive the objedt lat and lng from the object 
//      const {lat ,lng} =mapEvent.latlng
//      //on the clcik we set the market so when we clicked it will store mark on map with new object latitude and lonttiude 
// L.marker([lat,lng]).addTo(map).bindPopup(L.popup({
//     maxWidth:150,
//     minWidth:200,
//     autoClose:false,
//     closeOnClick:false,
//     className:'running-popup',
// }))
// .setPopupContent('Workout')
// .openPopup();  
// })
// //DOM TRAVESING USING INPUT TYPE 
// inputType.addEventListener('change',()=>{
// inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
// inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
// })