const addForm = document.querySelector('.add');
const listGroup = document.querySelector('.list-group');
addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex' justify-content-between align-items-center')
    li.textContent = todo;
    listGroup.appendChild(li)
    console.log(todo);
})