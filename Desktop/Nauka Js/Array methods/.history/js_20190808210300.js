const scores = [10, 30, 90,25,70,40,5];
const names = ['igor', 'ola', 'ania', 'kasia',' jarek',' natalia']
// const filteredScores = scores.filter((score) =>{
//     return score > 20;
// })
// console.log(filteredScores);

// const users = [
//     {name: 'igor', premium: 'true'},
//     {name: 'ola', premium: 'false'},
//     {name: 'ania', premium : 'false'},
// ]; 

// const premiumUsers = users.filter(users => users.premium)

// const prices = [20,10,30,25,15,40,80, 5];

// const salePrices = prices.map(price => price / 2)

const products = [
    {name: 'gold star', prie: 20},
    {name: 'mushroom', price: 40},
    {name: 'banana', price: 10}
]
// const saleProducts = products.map(product =>{
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2}
//     }else{
//         return product
//     }
// })

// console.log(saleProducts);
// console.log(salePrices);

// const result = scores.reduce((acc, curr) =>{
//     if(curr > 50){
//         acc++
//     }
//     return acc
// },0);
// console.log(result);1

const playerScores = [
    {player: 'mario', score: 50},
    {player: 'igor', score: 90},
    {player: 'ola', score: 0},
    {player: 'igor', score: 30},
];


// const totalScore = playerScores.reduce((acc, curr) =>{
//     if(curr.player === 'igor'){
//         acc += curr.score
//     }
//     return acc
// }, 0)

// console.log(totalScore);

// const firstHighScore = scores.find(score => score > 50)

names.sort();
names.reverse();
scores.sort((a,b) => a-b);
console.log(names,scores);

playerScores.sort((a,b) => b.score - a.score)
console.log(playerScores);

const promos = 