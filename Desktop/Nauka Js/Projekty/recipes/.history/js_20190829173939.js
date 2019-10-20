db.collection('recipes').get().then((snapshot) =>{
    console.log(snapshot.docs[0])
}).catch(err =>{
    console.log(err)
})