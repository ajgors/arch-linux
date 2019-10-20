const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('stuff worked');
    }else{
        reject('error it broke');
    }
})

promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2)
        throw Error
    })

    .catch(() => console.log('error'))
