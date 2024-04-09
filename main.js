const openForma = document.getElementById('open_forma');
const closeForma = document.getElementById('forma_close');
const forma = document.getElementById('forma');

openForma.addEventListener('click', function(e){
    e.preventDefault();
    forma.classList.add('active');
})

closeForma.addEventListener('click', ()=> {
    forma.classList.remove('active');
})

