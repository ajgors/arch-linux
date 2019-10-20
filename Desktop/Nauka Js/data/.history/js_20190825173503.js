// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve('stuff worked');
//     }else{
//         reject('error it broke');
//     }
// })

// const promise2 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 100, 'HII')
// })
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 1000, 'Mark')
// })
// const promise4 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 5000, 'co tam?')
// })


// Promise.all([promise,promise2,promise3,promise4])
//     .then(values =>{
//         console.log(values)
//     })
// promise
//     .then(result => result + '!')
//     .then(result2 => {
//         throw Error
//         console.log(result2)
//     })
//     .catch(() => console.log('error'))




const urls = [
    'https://jsonplaceholder.typicode.om/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]



// Promise.all(urls.map(url =>{
//     return fetch(url).then(response => response.json())
// })).then(data => console.log(data))

const users = async() =>{
    const fetchData = await fetch(urls[0]);
    const data =  await fetchData.json();
    return data
}
const posts = async() =>{
    const fetchData = await fetch(urls[1]);
    const data = await fetchData.json();
    return data
}
const albums = async() => {
    const fetchData = await fetch(urls[2]);
    const data = await fetchData.json();
    return data
}

users()
    .then(data => console.log(data))
    .catch(() => console.log('error fetching users data'))
    
posts()
    .then(data => console.log(data))
    .catch(() => console.log('error fetching data'))
    
albums()
    .then(data => console.log(data))
    .catch(() => console.log('error fetching data'))