const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const span = document.querySelectorAll('span');
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`
    list.innerHTML += html
    // list.append(html)
};
// for(i=0; 10>i; i++);
addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length && todo !== span[i]){
        generateTemplate(todo)
        addForm.reset()
    }

})

console.log(span);
// span.forEach(item => {
//     console.log(item)
// })