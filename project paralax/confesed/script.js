let stars = document.getElementById('stars');
let rocket = document.getElementById('rocket');
let meteorid = document.getElementById('meteorid');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY
    stars.style.left = value * 0.27 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    meteorid.style.left = value * 0.24 + 'px';
})