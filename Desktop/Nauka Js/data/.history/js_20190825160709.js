fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response.body))