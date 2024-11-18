
////////////////////////////////////////////////////SLIDER COMPONENT///////////////////////////////////////////////
const slider = () => {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    //it will create daynemically dots in js once scrolling 
    const createDots = () =>
      slides.forEach((_, i) =>
        //this tag will be used to store html elment at that specefied postion in js 
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        )
      );
      //once we scroll this will show the dot is active and slide been in currently in used 
    const activateDot = (slide) => {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.toggle('dots__dot--active', dot.dataset.slide == slide));
    };
  
  //it will used to move to the specefic slide with active dots function call   
    const goToSlide = (slide) => {
      slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
      activateDot(slide); // Combine activation here for clarity
    };
  
    //change slides everytime backward and forward
    const changeSlide = (direction) => {
      curSlide = (curSlide + direction + maxSlide) % maxSlide; // Wrap around slides
      goToSlide(curSlide);
    };
    const init = () => {
      createDots();
      goToSlide(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', () => changeSlide(1));
    btnLeft.addEventListener('click', () => changeSlide(-1));
  
  }
  
  slider();