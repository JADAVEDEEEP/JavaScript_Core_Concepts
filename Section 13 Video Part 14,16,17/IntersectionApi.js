
////////////////////////////////////////////////INTERSCTION API USING STICKY NAVGATION  /////////////////////////////////////////////////
//it will monitor when any specefic element levers or enters in to the view point 
//vsiblity of viewport 
//USECASE : lazyloading ,ifinitescrolling,perdomance optmization 
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries)=> {
  const [entry] = entries;
 

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
//it will call back the fucntion each time when the entires started 
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);