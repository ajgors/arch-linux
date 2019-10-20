db.collection('recipes').get().then((snapshot) =>{

    snapshot.docs.(array).forEach(element => {
        
    });
}).catch(err =>{
    console.log(err)
})