// const body = document.querySelector('.ayp-body');
// const nav = document.querySelector('.ayp-nav-container-inner');
// const btn = document.querySelector('.ayp-nav-burger-btn-container');

// btn.addEventListener('click', function(){
//     //nav.classList.toggle('active');
//     console.log(nav)
//     // body.classList.toggle('nav-active');
// });

const body = document.querySelector('.ayp-body');
const nav = document.querySelector('.ayp-nav-container-inner');
const btn = document.querySelector('.ayp-nav-btn-label');

btn.addEventListener('click', function(){
    body.classList.toggle('active-menu')
    nav.classList.toggle('active')
});