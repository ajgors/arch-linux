// const div = document.querySelector('.hamburger__overlay');

// function openNav(){
//     document.querySelector('.hamburger__overlay').classList.toggle('hamburger__overlay--toggle')
//     // div.classList.toggle('hamburger__overlay--toggle')
// }


let menu = document.querySelector('.hamburger');

menu.addEventListener('click', function() {
  this.classList.toggle('hamburger--active');
}, false);