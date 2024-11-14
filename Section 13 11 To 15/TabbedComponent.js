// Event delegation to handle clicks on tabs
tabscontainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  
  // Guard clause to prevent errors
  if (!clicked) return;
  
  // Active Tab - Remove active class from all tabs, then add to the clicked one
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active Content - Remove active class from all content, then add to the relevant content
  tabcontent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

