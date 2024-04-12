const openForma = document.getElementById('open_forma');
const closeForma = document.getElementById('forma_close');
const forma = document.getElementById('forma');

const disableBtn = document.getElementById('submit_disable');
const validIn = document.getElementById('valid_in');

disableBtn.setAttribute('disabled', true);

openForma.addEventListener('click', function(e){
    e.preventDefault();
    forma.classList.add('active');
})

closeForma.addEventListener('click', ()=> {
    forma.classList.remove('active');
})

validIn.oninput = function(){
    if (validIn.value.length < 8) {
        disableBtn.setAttribute('disabled', true);
        } else {  
        disableBtn.removeAttribute('disabled');
    }
}

