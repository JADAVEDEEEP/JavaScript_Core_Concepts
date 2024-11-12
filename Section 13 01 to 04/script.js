

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


//modifided code by me normal function in to Arrow function both modal done with Arrow function 
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = (e) => {
    e.preventDefault();  
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
//Pass the function call back as openmodal so one at time we can use openmodal pop up on two diffrent buttons 
btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});