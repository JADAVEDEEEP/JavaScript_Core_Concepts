
///////////////////////////////////////////////////////EVENT PROPOGATION PRACTICE INTO LINKS HEADER////////////////////////////////////////
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomColor();
});
