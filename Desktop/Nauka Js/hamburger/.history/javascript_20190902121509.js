const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation')
const handleCLick = () =>{
    hamburger.classList.toggle('hamburger--active');
}
hamburger.addEventListener('click', handleCLick)