const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`
    list.innerHTML += html
    
};

addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // const li = document.createElement('li');
    // const icon = document.createElement('i')
    // icon.classList.add('far', 'fa-trash-alt', 'delete')
    // li.classList.add('list-group-item', 'd-flex' ,'justify-content-between', 'align-items-center')
    // li.textContent = icon;
    // listGroup.appendChild(li)
    // console.log(todo);
    // console.log(icon)

    generateTemplate(todo)

})