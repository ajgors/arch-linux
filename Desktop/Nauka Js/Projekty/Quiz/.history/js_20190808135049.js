const correctAnswers = ['B', 'B', 'B', 'B'];
const span = document.querySelector('span');
const result = document.querySelector('.result')
const form = document.querySelector('.quiz-form');
form.addEventListener('submit', e =>{
    e.preventDefault();
    let score  = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
        span.textContent = score;
    });

});