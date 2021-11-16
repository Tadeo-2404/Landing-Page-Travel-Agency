let modal = document.getElementById('modal');
let abrir = document.querySelectorAll('button');
let cerrar = document.getElementById('close')
let body = document.getElementById('flex');



cerrar.addEventListener('click', function() {
  modal.style.display = 'none';
});


abrir.forEach(button => {
    button.addEventListener("click", () => {
    modal.style.display = "block";
})})

modal.addEventListener('click', function() {
    modal.style.display = 'none';
  });