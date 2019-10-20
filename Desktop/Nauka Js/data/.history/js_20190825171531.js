const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('stuff worked');
    }else{
        reject('error it broke');
    }
})

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, 'HII')
})
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, 'HII')
})
const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, 'HII')
})


promise
    .then(result => result + '!')
    .then(result2 => {
        throw Error
        console.log(result2)
    })
    .catch(() => console.log('error'))
