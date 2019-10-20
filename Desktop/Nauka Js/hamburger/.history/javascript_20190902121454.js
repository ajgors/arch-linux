const hamburger = document.querySelector('.hamburger');

const handleCLick = () =>{
    hamburger.classList.toggle('hamburger--active');
}
hamburger.addEventListener('click', handleCLick)