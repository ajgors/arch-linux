const div = document.querySelector('.hamburger__div');
const divTwo = window.getComputedStyle('.hamburger__div', ':after');
const divthree = window.getComputedStyle('.hamburger__div', ':before');


function openNav(){
    document.querySelector('.hamburger__overlay').classList.toggle('hamburger__overlay--toggle')


