let modal = document.getElementById('modal');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close')
let body = document.getElementById('flex');

cerrar.addEventListener('click', function() {
  modal.style.display = 'none';
});

modal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.onload  = function() {
  modal.style.display = 'block';
};

/* SLIDER */
(function() {
const sliders = [...document.querySelectorAll('.slider__body')];
const arrowNext = document.querySelector('#next');
const arrowBefore = document.querySelector('#before');
let value;

arrowNext.addEventListener('click', ()=>changePosition(1));
arrowBefore.addEventListener('click', ()=>changePosition(-1));

function changePosition(change) {
   const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

   value = currentElement;
   value += change;

   if(value == 0 || value == sliders.length+1) {
       value = value == 0 ? sliders.length : 1;
   }

   sliders[currentElement-1].classList.toggle('slider__body--show');
   sliders[value-1].classList.toggle('slider__body--show');
}
})()