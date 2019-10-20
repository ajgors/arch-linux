db.collection('recipes').get().then((snapshot) =>{

    snapshot.docs.forEach()
}).catch(err =>{
    console.log(err)
})