const list = document.querySelector('ul');


const addRecipe = (recipe, id) =>{
    let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `
    list.innerHTML  += html
}



//add doc


const form = document.querySelector('form');
form.addEventListener('submit', e=>{
    e.preventDefault();

    const now = new Date()
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection('recipes').add(recipe).then(() =>{
        console.log('recipe added');
    }).catch(err => console.log(err))
    form.reset()
});

//deleteing data

list.addEventListener('click', e=>{
    if(e.target.tagName === 'BUTTON'){
        // console.log(e.target.parentElement)
        // console.log(e.target.tagName)

    const id = e.target.parentElement.getAttribute('data-id');
    db.collection('recipes').doc(id).delete().then(() =>{
        console.log('recipe removed')
    })
}
})