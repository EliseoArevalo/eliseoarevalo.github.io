let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');


// hideText_btn.addEventListener('click', toogleText);

// function toogleText() {
//     hideText.classList.toggle('ver');
// }

 
hideText_btn.addEventListener('click', e =>{
    hideText.classList.toggle('ver');
});


if(hideText.classList.contains('ver')){
    hideText_btn.innerHTML = 'Leer menos';
}
else {
    hideText_btn.innerHTML = 'Lee mas';
}