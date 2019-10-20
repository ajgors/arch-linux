const div = document.querySelector('.hamburger__div');
const divtwo = window.getComputedStyle('.hamburger__div', ':after');
const divthree = window.getComputedStyle('.hamburger__div', ':before');


function openNav(){
    document.querySelector('.hamburger__overlay').classList.toggle('hamburger__overlay--toggle')
    div.style.transform = transform: rotate(-45deg)')
    // divtwo.style = ('transform: rotate(90deg) translateX(-5px) ')
}

