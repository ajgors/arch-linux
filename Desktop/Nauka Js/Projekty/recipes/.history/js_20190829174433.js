const list = document.querySelector('ul');


const addRecipe = (recipe) =>{
    let html = `
    <li>
        <div>${recipe.title}</div>
    </li>
    `
    console.log(html)
}


db.collection('recipes').get().then((snapshot) =>{

snapshot.docs.forEach(doc =>{
    add
})
}).catch(err =>{
    console.log(err)
})
