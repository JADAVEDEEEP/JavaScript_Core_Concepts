const handleHover = (e) => {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = 0.5;
      });
      logo.style.opacity = 0.5;
    }
  };
  
  const handleMouseOut = (e) => {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        el.style.opacity = 1;
      });
      logo.style.opacity = 1;
    }
  };
  nav.addEventListener('mouseover', handleHover);
  nav.addEventListener('mouseout', handleMouseOut);
  