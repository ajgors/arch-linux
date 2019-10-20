const list = document.querySelector('ul');


const addRecipe = (recipe) =>{
    let html = `
    <li>
        <div>${recipe.title}</div>
        <dib</dib>
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
