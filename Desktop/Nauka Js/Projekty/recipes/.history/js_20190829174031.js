db.collection('recipes').get().then((snapshot) =>{

    snapshot.docs.for
}).catch(err =>{
    console.log(err)
})