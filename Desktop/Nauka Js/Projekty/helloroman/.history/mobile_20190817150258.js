const div = document.querySelector('.hamburger__div');
const div = window.getComputedStyle('.hamburger__div', ':after');
const div = window.getComputedStyle('.hamburger__div', ':before');


function openNav(){
    document.querySelector('.hamburger__overlay').classList.toggle('hamburger__overlay--toggle')
    div.style = ('transform: rotate(-45deg)')
}

