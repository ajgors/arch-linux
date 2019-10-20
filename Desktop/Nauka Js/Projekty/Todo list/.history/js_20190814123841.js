// const addForm = document.querySelector('.add');
// const list = document.querySelector('.todos');
// const input = document.querySelector('.search input');
// // const input
// const button = document.querySelector('.add-todo');
// const buttonRemove = document.querySelector('.remove-todos');
// var lis = document.querySelector("ul").getElementsByTagName("li");

// const generateTemplate = todo => {
//     const html = `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//     <span>${todo}</span>
//     <i class="far fa-trash-alt delete"></i>
// </li>`
//     list.innerHTML += html
// };

// addForm.addEventListener('submit',e =>{
//     e.preventDefault();
//     const todo = addForm.add.value.trim();
//     if(todo.length && todo !== list.innerText){
//         generateTemplate(todo)
//         addForm.reset()
//     }

// })
// button.addEventListener('click', e =>{
//     e.preventDefault()
//     const todo = addForm.add.value.trim();
//     if(todo.length &&{
//         generateTemplate(todo)
//     }
// })
// buttonRemove.addEventListener('click', e =>{
//     e.preventDefault();
//     list.innerHTML = '';
// })


// //delete todo

// list.addEventListener('click', e => {
//     if(e.target.classList.contains('delete')){
//         e.target.parentElement.remove()
//     }
// })

// const filterTodos = (term) => {
//  Array.from(list.children)
//  .filter(todo =>!todo.textContent.toLocaleLowerCase().includes(term))
//  .forEach(todo => todo.classList.add('filtered'))

//  Array.from(list.children)
//  .filter(todo =>todo.textContent.toLocaleLowerCase(1).includes(term))
//  .forEach(todo => todo.classList.remove('filtered'))
// };
// //
// input.addEventListener('keyup', () => {
//     const term = input.value.trim().toLowerCase();
//     filterTodos(term);

// })


let playlist =['Despacito - Remix', "I'm the One", "Shape of you", "HUMBLE", "Swalla"];

// playlist.forEach((track,index) => console.log(`${index+1} - ${track}`));
const 



console.log(playlist);