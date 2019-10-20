db.collection('recipes').get().then((snapshot) =>{

    snapshot.do
}).catch(err =>{
    console.log(err)
})