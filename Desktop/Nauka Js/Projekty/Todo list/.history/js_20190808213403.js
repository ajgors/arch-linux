const addForm = document.querySelector('.add');
const listGroup = document.querySelector('.list-g')
addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);
})