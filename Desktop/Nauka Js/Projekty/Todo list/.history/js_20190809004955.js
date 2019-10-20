const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const input = document.querySelector('.search input')

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
    if(todo.length){
        generateTemplate(todo)
        addForm.reset()
    }

})

//delete todo

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

const filterTodos = (term) => {
 Array.from(list.children)
 .filter(() =>{
     returm
 })
};
//
input.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);

})