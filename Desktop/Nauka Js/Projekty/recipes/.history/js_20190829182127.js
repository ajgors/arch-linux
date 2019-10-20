const list = document.querySelector('ul');


const addRecipe = (recipe) =>{
    let time = recipe.created_at.toDate()
    let html = `
    <li>
        <div>${recipe.title}</div>
        <div>${time }</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `
    list.innerHTML  += html
}


db.collection('recipes').get().then(snapshot =>{

snapshot.docs.forEach(doc =>{
    console.log(doc.)
    addRecipe(doc.data())
})
}).catch(err =>{
    console.log(err)
})

const form = document.querySelector('form');

//add doc


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
});

//deleteing data

list.addEventListener('click', e=>{
    console.log(e.target.tagName)
if(e.target.tagName === 'BUTTON'){

}
})