const list = document.querySelector('ul');


const addRecipe = (R) =>{
    let html = `
    
    `
}


db.collection('recipes').get().then((snapshot) =>{

snapshot.docs.forEach(doc =>{
    console.log(doc.data())
})
}).catch(err =>{
    console.log(err)
})