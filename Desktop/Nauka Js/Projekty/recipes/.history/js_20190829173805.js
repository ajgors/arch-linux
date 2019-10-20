db.collection('recipes').get().then((snapshot) =>{
    console.log()
}).catch(err =>{
    console.log(err)
})