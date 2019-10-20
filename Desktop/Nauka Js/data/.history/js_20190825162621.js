const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('stuff worked');
    }else{
        reject('error it broke');
    }
})

promise
    .then(result => result + '!')
    .then(result => {
        throw erro
        console.log(result)
    })
    .catch(() => console.log('error'))