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




// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]



// Promise.all(urls.map(url =>{
//     return fetch(url).then(response => response.json())
// })).then(data => console.log(data))
//     .catch(() => console.log('error'))

// const users = async() =>{
//     const fetchData = await fetch(urls[0]);
//     const data =  await fetchData.json();
//     return data
// }
// const posts = async() =>{
//     const fetchData = await fetch(urls[1]);
//     const data = await fetchData.json();
//     return data
// }
// const albums = async() => {
//     const fetchData = await fetch(urls[2]);
//     const data = await fetchData.json();
//     return data
// }

// users()
//     .then(data => console.log(data))
//     .catch(() => console.log('error fetching users data'))
    
// posts()
//     .then(data => console.log(data))
//     .catch(() => console.log('error fetching data'))
    
// albums()
//     .then(data => console.log(data))
//     .catch(() => console.log('error fetching data'))


// const promise = new Promise((resolve, rejected)=>{
//     setTimeout(resolve, 4000, 'success')
// })

// promise
//     .then(data => console.log(data))


// const promise7 = Promise.resolve(setTimeout(4000, 'success'))
// promise7
//   .then(value => console.log(value))

//   var promise1 = Promise.resolve(123);

// promise1.then(function(value) {
//   console.log(value);
//   // expected output: 123
// });

// const urls = [
//   'https://swapi.co/api/people/1',
//   'https://swapi.co/api/people/2',
//   'https://swapi.co/api/people/3',
//   'https://swapi.co/api/people/4'
// ]

// Promise.all(urls.map(url =>
//   fetch(url).then(people => people.json())
// ))
//   .then(array => {
//     console.log('1', array[0])
//     console.log('2', array[1])
//     console.log('3', array[2])
//     console.log('4', array[3])
//   })
//   .then(err => console.log('error', err))
// let obj
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(() =>console.log(obj))

let users;
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => ({user}))