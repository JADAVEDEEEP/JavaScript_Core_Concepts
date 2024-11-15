
///////////////////////////////////////////////////REAVALING SECTION USING SCROLLING/////////////////////////////////////
const allSections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return; 
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, 
  threshold: 0.15, 
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});




