const a = 10;
const b = 7;
const c = 8;


if(a > b && a > c){
.log('a jest największe')
}else{
    if(b > c){
    .log('b jest największe')
    }else{
    .log('c jest największe')
    }
}



const form = document.querySelector('form');

form.addEventListener('click', e=>{
    e.preventDefault();

    const age = form.age.value;
    const ageNr = Number(age);

    if(!isNaN(ageNr) && age >= 18){
    .log('wssyzkto kok')
    }