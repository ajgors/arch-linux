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
        throw Error
        console.log(result2)
    })
    .then(result3 => {console.log(resu)})

    .catch(() => console.log('error'))