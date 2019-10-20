// const correctAnswers = ['B', 'B', 'B', 'B'];
// const span = document.querySelector('span');
// const result = document.querySelector('.result')
// const form = document.querySelector('.quiz-form');

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     let score  = 0;
//     const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//     //check answers
//     userAnswers.forEach((answer, index) =>{
//         if(answer === correctAnswers[index]){
//             score += 25;
//         }
//     });
//     scrollTo(0,0)
//     result.classList.remove('d-none')
    
//     let output =  0 ;
//     const timer = setInterval(()=> {
//         span.textContent = `${output}%`;
//         if(output === score){
//             clearInterval(timer);
//         }else{
//             output++;
//         }
//     },10)
// });







const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correctAnswers = ['B','B','B','B'];
const spanResult = document.querySelector('span');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    spanResult.textContent = `${score}%`


    //check answer

scrollTo(0,0)
    result.classList.remove('d-none');
})