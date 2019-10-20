const addForm = document.querySelector('.add');
const listGroup = document.querySelector('.list-group');
addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    const li = document.createElement('li');
    li.textContent = todo;
    
    console.log(todo);
})