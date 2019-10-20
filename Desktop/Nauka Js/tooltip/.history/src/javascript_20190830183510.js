// //rest parametr

// const double = (...nums) =>{
//     return nums.map(num => num*2)
// }

// const result = double(1,2,3,4,5,6,7,9) 
// console.log(result)

// //spread syntax (arrays)

// const people  = ['shaun', 'ryu', 'crystal'];
// const members = ['igor', 'ola', ...people]
// console.log(...people)

// //spread syntax (object)
// //copy of the object ^

// const person = {
//     name: 'igor',
//     age: 15,
// }

// const personClone = {...person, location: 'poland'};






// //sets
// const namesArray = ['ryu', 'igor', 'igor'];
// console.log(namesArray)


// const nameSet = new Set(namesArray);
// console.log(nameSet)

// const  uniqueNames = [...new Set(namesArray)]


// const ages = new Set();
// ages.add(20)
// ages.add(30).add(69)
// ages.delete(25)

// console.log(ages.size)
// console.log(ages.has(30))


// // ages.clear()
// // console.log(ages)

// ages.forEach(age =>{
//     console.log(age)
// })


//symbols

const symbolOne = Symbol();
const symbolTwo = Symbol();
console.log(symbolOne)
console.log(symbolOne === symbolTwo)
console.log('xd')
console.log('xd')
console.log('xd')