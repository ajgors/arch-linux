const list = document.querySelector('ul');


const addRecipe = (recipe) =>{
    let time = recipe.created_at.toDate().tosTRNG
    let html = `
    <li>
        <div>${recipe.title}</div>
        <div>${time }</div>
    </li>
    `
    list.innerHTML  += html
}


db.collection('recipes').get().then((snapshot) =>{

snapshot.docs.forEach(doc =>{
    console.log(doc.data().created_at.toDate())
    addRecipe(doc.data())
})
}).catch(err =>{
    console.log(err)
})
