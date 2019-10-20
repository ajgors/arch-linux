db.collection('recipes').get().then((snapshot) =>{

    snapshot.docs.()).forEach(element => {
        
    });
}).catch(err =>{
    console.log(err)
})