const addForm = document.querySelector('.add');
const listGr
addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);
})