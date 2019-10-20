const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('stuff worked');
    }else{
        reject('error it broke');
    }
})

promise
    .then(result => result + '!')
    .catch(() => console.log('error'))
    .then(result2 => {
        console.log(result2)
    })
    .then(result3 => {
        console.log(result3 + '!')
        throw Error
    })
