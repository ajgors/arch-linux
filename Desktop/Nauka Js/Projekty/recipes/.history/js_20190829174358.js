const list = document.querySelector('ul');


const addRecipe = (recipe) =>{
    let html = `
    <li>
        <div>${}</div>
    </li>
    `
}


db.collection('recipes').get().then((snapshot) =>{

snapshot.docs.forEach(doc =>{
    console.log(doc.data())
})
}).catch(err =>{
    console.log(err)
})