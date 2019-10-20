fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {return data})

    console.log(data)