burger = document.querySelector('.burger')
uli = document.querySelector('.v-class-resp')
navbar=document.querySelector('.hnavresp ')



burger.addEventListener('click', ()=>{
    uli.classList.toggle('container-2');
    navbar.classList.toggle('navbar');
    
})