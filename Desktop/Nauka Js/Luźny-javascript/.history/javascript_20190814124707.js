// strings methods
const name = "Igor Stadnicki";
// const res+ult = name.lastIndexOf('i');
// const result2 = name.slice(0,4);
// const result3 = name.substr(4, 5);
// const result4 = name.toUpperCase();
// const result5 = name.replace('I', 'A');
// console.log(resoult5);

//array methods
const ninjas = ["shaun", "ryu", "chun-li"];
// const result = ninjas.join(',');
// const result = ninjas.indexOf('ryu');
// const result = ninjas.concat(['ken', 'crystal']);
// const result = ninjas.push('ken');
// const result = ninjas.pop();
// console.log(resoult, ninjas);

const array = ["shaun", "mario", "luigi"];

//while loop
// const i = 0;
// while(i< array.length){
//     console.log(array[i]);
//     i++;
// }

//do while loop
// const i = 5;
// do{
//     console.log('val of i is: ', i);
//     i++
// } while(i<5)

// const password = "p@ssword1234";

// if (password.length >= 12 && password.includes("@")) {
//   console.log("That password is very strong");
// } else if (password.length >= 8) {
//   console.log("That pasword is long enounght");
// } else {
//   console.log("That password is not long enought");
// }

// const score = [10, 30, 0, 90, 100, 20];

// for (const i = 0; i < score.length; i++) {
//   if (score[i] === 0) {
//     continue;
//   }
//   console.log(score[i]);
//   if (score[i] === 100) {
//     console.log("Congrats, you got the top score");
//     break;
//   }
// }

//switch statement
// const grade = "C";

// switch (grade) {
//   case "A":
//     console.log("you got an A!");
//     break;
//   case "B":
//     console.log("you got an B!");
//     break;
//   case "C":
//     console.log("you got an C!");
//     break;
//   case "D":
//     console.log("you got an D!");
//     break;
//   case "E":
//     console.log("you got an E!");
//     break;
//   case "F":
//     console.log("you got an F!");
//     break;
//   default:
//     console.log("not a valid grade");
// }

//variables & block scope
// const age = 30;

// if (true) {
//   const age = 40;
//   console.log("inside code block", age);

//   if (true) {
//     const age = 50;
//     console.log("inside 2nd code block", age);
//   }
// }

// console.log("outside code block", age);





//function


// function greet(){
//   console.log('Hello there');
// }

// const speak = function(name = 'pudzian'){
// console.log(`good day ${name}`);
// };


// greet();
// speak()

const calcArea = radius => 3.14 * radius**2

const area = calcArea(5);
console.log(area);

const greet = () => 'Hello, world';
const result = greet()
console.log(result);



//------------------------------------------------------------------------------------------------------------------------------------------------------




// const database = [
//     {
//         username: 'igor',
//         password: '123'
//     },
//     {
//         username: 'ola',
//         password: '123'
//     }
// ]

// let news = [
//     {
//         username : 'Bobby',
//         timeline: 'Js is super cool',
//     },
//     {
//         username: 'Pudzian',
//         timeline : 'Samo sie nic nie zrobi',
//     }
// ]

// let usernamePrompt = prompt('What is your username?');
// let passwordPrompt = prompt('What is your password');

// const isuservalid = (username,password) =>
// {for(let i=0; i<database.length; i++)
//     if(database[i].username === username &&
//         database[i].password === password){
//             return true
//     }
// return false
// }

// const signIn = (username,passowrd) =>
// {if(isuservalid(username,passowrd)){
//     console.log(news);
// }else{
//     alert('wrong username and passowrd')
// }}

// signIn(usernamePrompt, passwordPrompt)

// let age = prompt('What is your age')

// if(age > 18){
//     alert('Powering on. Enjoy the ride!')
// } else if (age < 18){
//     alert('Sorry, you are too young to drive this car. Powering off')
// } else if( age == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// }

//----------------Array methods---------------------

// const myArray = [1,2,3,4,5]

// //pop /push --- mutuja tablice
// myArray.pop(); //usuwa ostatni element
// myArray.push('igor') // dodaje jako ostatni

// console.log(myArray);

// //shift /unshift --- mutuja tablice

// myArray.shift(); //usuwa 1 element
// myArray.unshift('pudzian'); //dodaje jako pierwszy
// console.log(myArray);

//--------przyklad=-------

// const app = document.querySelector('#app');
// const div = document.createElement('div');

// let tags = ['jazz', 'rock'];
// tags.push('metal');

// const newTags = ['pop', 'rnb'];
// let allTags = [].concat(tags,newTags)

// div.innerHTML = allTags.join(', ') //dodajemy alltags do diva w html
// app.appendChild(div) //dodajemy div do app

//slice arr.slice(begin,end) //nie modyfikuje tablicy a zwraca nowa

// const myArray = [1,2,3,4,5,6,7,8];
// let newArray = myArray.slice(5)  //ucinamy indexu 5
// let newArray2 = myArray.slice(3,6) //ucinamy  od inxedu 3 do 6 nie biorac go pod uwage
// console.log(newArray,newArray2);

//arr.splice(begin,deleteCount, r) //modyfikuje nasza tablcie

// myArray.splice(5) //ucinamy od indexu 5
// myArray.splice(0,2) //ucinamy od indexu 0 2 elementy
// myArray.splice(3,0, 'igor') //dodajemy element do tablicy na danym indexie
// console.log(myArray);

//arr.forEach( //przechodzi po kazdym elemencie tablicy i wykonuje jakas funkcje na danym elemencie

// const myArray = [1,2,3,4];
// myArray.forEach((element,i)=>{
//     console.log(`${element} is at ${i} index`);
// })

// const list = document.querySelector('#list');
// const myArray = ['igor', 'ola', 'kasia',' ania'];

// myArray.forEach((item)=> {
//     const li = document.createElement('li');

//     li.innerHTML = item;
//     list.append(li)
// })

// const listElements = document.querySelectorAll('li');

// listElements.forEach((elements) =>{
//     elements.addEventListener('click', (e)=>{
//         listElements.forEach(element =>{
//             element.classList.remove('list-item')
//         })
//         e.target.classList.add('list-item')
//     })
// })

//arr.filter  //filtrowanie tablicy

// const myArray =[1,2,3,4,5,6];
// const newmyArray = myArray.filter(cur => cur % 2 ===0 )
// console.log(newmyArray);

// const shoppingItems = [
//     {
//       name: "Meat",
//       price: 15.5,
//       category: "food"
//     },
//     {
//       name: "Soap",
//       price: 2.99,
//       category: "cosmetic"
//     },
//     {
//       name: "Carrots",
//       price: 1.25,
//       category: "food"
//     }
//   ];
  
  // const foodItems = shoppingItems.filter(({category}) => category === 'food')
  // console.log(foodItems);
  
  //arr.find //zwraca 1 element jaki znajdzie funkcja sie konczy
  
  // const getCarrots = shoppingItems.find(({name}) => name === 'Carrots')
  // console.log(getCarrots);
  
  //arr.map //zwraca nowa tablcie
  
  // const myArray = [1,2,3,4,5]
  
  // const mapArray = myArray.map((element, i ) => {
  //     return element * i
  // })
  // console.log(mapArray);
  
  // const mapArray  = shoppingItems.map(({name, price, category}) =>{
  //     return `${name} | ${price} | ${category}`
  // })
  // console.log(mapArray);
  
  //arr.reduce
  // const totalPrice = shoppingItems.reduce((acc, item) =>{
  //     return acc  + item.price;
  // }, 0)
  // console.log(`Total price is $${totalPrice.toFixed(2)}`);
  
  // const priceOfCosmetic = shoppingItems
  // .filter(({category})=> category === 'cosmetic')
  // .reduce((acc,{price}) => acc + price, 0)
  
  // console.log(priceOfCosmetic);
  
  //es6
  //domyslne wartosci
  
  // function getName(name = 'Roman'){
  //     console.log(`My name is ${name}`);
  // }
  
  // //nowe stringi
  // const newString = `Bylo ciele lato
  // coc chacem padalo
  // duo wino sie pilo
  // i malo sie spalo`
  
  // const elza = 'Elza';
  // console.log(`My cat is ${elza}`);
  
  // //Destructurign
  // const myObj = {
  //     name: 'igor',
  //     job: 'none',
  //     age: 15,
  // }
  // const {name,age} = myObj;
  //name = igor, age = 15
  // console.log(name,age);
  
  // function me({name,age}){ //juz w funkcji mozna
  //     // const {name,age} = personalData;
  //     console.log(`My name is ${name} and I am ${age} years old`);
  // }
  // me(myObj)
  
  // const myObjectDetails= {
  //     name: 'Roman',
  //     job: 'Programmer',
  //     fromerJobs: {
  //         first : 'farm worker',
  //         second : 'waiter',
  //         recent: 'copywriter',
  //     },
  //     age: 28,
  // }
  
  // function getFirstJob({formeerJobs,fromerJobs : {first} }){
  //     console.log(`I was a ${first} back in 2005`);
  // }
  // getFirstJob(myObjectDetails)
  
  //w tablicach
  
  // const names = ['Igor', 'Ola', 'Ania'];
  // const [first,second] = names;
  // console.log(first,second);
  
  // //arrow functions
  
  // const returnName = (name) => {
  //     retun `My name is ${name}`
  // }
  
  // const returnName2 = (name) => `My name is ${name}`
  
  //DOM
  
  // const app = document.querySelector('#app');
  // const h2 = document.createElement('h2');
  
  // const myArray =['Igor', 'Ola', 'Ania', 'Natala', 'Kasia', 'Jarek'];
  
  // h2.innerHTML = `My family names ${myArray.join(', ')}`;
  // app.appendChild(h2);
  
  // const paras = document.querySelectorAll('p');
  
  // paras.forEach((elements) => {
  //     elements.addEventListener('click', (e) =>{
  //         e.target.classList.toggle('bigger')
  //     })
  // })
  
  //inny sposob
  
  // const app2 = document.getElementById('app');
  // const para = document.getElementsByTagName('p');
  // const para2 = document.getElementsByClassName('name')
  
  //lepiej uzywac 1 sposobu //na tym nie da sie wykonac forEach()
  
  // para.forEach() //błąd
  
  // var button = document.querySelector('#enter');
  // const input = document.querySelector('#user-input');
  // const ul = document.querySelector('ul');
  
  // function inputLength(){
  //     return input.value.length;
  // }
  // function createListElement(){
  //     var li = document.createElement('li');
  //     li.appendChild(document.createTextNode(input.value));
  //     ul.appendChild(li)
  //     input.value = '';
  // }
  // button.addEventListener('click',function(){
  //     if(inputLength() > 0){
  //         createListElement();
  //     }
  // })
  
  // input.addEventListener('keypress', function(event){
  //     if(inputLength() > 0 && event.keyCode == 13){
  //         createListElement();
  //     }
  // })
  // const inputValue = () => input.value.length
  
  // const createListElement = () => {
  //     let li = document.createElement('li');
  //     li.appendChild(document.createTextNode(input.value));
  //     ul.appendChild(li);
  //     input.value = '';
  
  //         let button  = document.createElement('button');
  //         button.appendChild(document.createTextNode('Done!'));
  //         li.appendChild(button)
  //         button.onclick=removeParent;
  // }
  
  // function removeParent(evt){
  //     evt.target.parentNode.remove();
  // }
  
  // function addListAfterClick(){
  //     if(inputValue() > 0){
  //         createListElement();
  //     }
  // }
  
  // function addListAfterKeypress(e){
  //     if(inputValue() > 0 && e.key === 'Enter'){
  //         createListElement();
  //     }
  // }
  
  // button.addEventListener('click', addListAfterClick)
  // button.addEventListener("keypress", addListAfterKeypress)
  
  // const para = document.querySelector('p');
  // para.innerText = 'elektroluks ma pchły'
  
  // console.log(para.innerText)
  // const paras = document.querySelectorAll('p');
  // paras.forEach(para => {
  //     para.innerText += ` new text`;
  //     console.log(para.innerText);
  // // })
  // const content = document.querySelector('.content');
  // // console.log(content.innerHTML)
  // // content.innerHTML = '<h2>this is a new h2</h2>'
  // const people = ['mario', 'luigi', 'pudzian'];
  // people.forEach(person =>{
  //     content.innerHTML +=  `<p>${person}</p>`
  // })
  
  // const link = document.querySelector('a');
  
  // console.log(link.getAttribute('href'));
  
  // link.setAttribute('href', 'https://www.gry.pl');
  // link.innerHTML = "fajne gry";
  
  // const msg = document.querySelector('p');
  // console.log(msg.getAttribute('class'));
  // msg.setAttribute('class', 'success');
  // msg.setAttribute('style', 'color: green');
  
  // const title = document.querySelector('h1');
  // // title.setAttribute('style', 'margin : 50px')
  
  // title.style.color = 'green';
  // title.style.fontSize = '3em'
  // title.style.margin = '50px';
  // title.style.margin = '';
  // const paras = document.querySelector('p');
  
  // paras.classList.add('error')
  // paras.classList.remove('error')
  // paras.classList.add('success')
  
  // const paras = document.querySelectorAll('p');
  
  // paras.forEach(p =>{
  //     if(p.textContent.includes('error')){
  //         p.classList.add('error');
  //     }
  //     if(p.textContent.includes('success')){
  //         p.classList.add('success');
  //     }
  // })
  
  // const title = document.querySelector('.title');
  // title.classList.toggle('bigger')
  
  //genarator koloro"
  
  // var css= document.querySelector('h3');
  // var color1 = document.querySelector('.color1');
  // var color2 = document.querySelector('.color2');
  // var body = document.getElementById('gradient')
  
  // const gradientBackgorund = () => {
  //     body.style.background =
  //     "linear-gradient(to right, "
  //      + color1.value
  //      +","
  //      + color2.value
  //      + ")";
  
  //      css.textContent = body.style.background + ';`'
  // }
  // color1.addEventListener('input', gradientBackgorund);
  // color2.addEventListener('input', gradientBackgorund);
  
  //
  
  // condition ? expr1 : expr2;
  
  // function isUserValid(bool){
  //     return bool
  // }
  // var answer = isUserValid(true) ? 'You may enter' : 'Access denied';
  
  // let namePrompt = prompt('What is your name');
  // let passwordPrompt = prompt('What is your password');
  
  // function isUserValid(){
  //     if(namePrompt === "igor" && passwordPrompt === '123'){
  //         return true;
  //     }
  //     return false;
  // }
  
  // var automatedAnswer =
  // 'Your account number is ' + (isUserValid() ? '12345' : "not available");
  
  // alert(automatedAnswer);
  
  //switch
  
  // function moveCommand(direction){
  //     var whatHappens;
  //     switch (direction){
  //         case "forward":
  //             whatHappens = 'you encounter a monster';
  //             break;
  //         case "back":
  //             whatHappens = 'you escaped';
  //             break;
  //         case "left":
  //             whatHappens = 'you found a diamond';
  //             break;
  //         case "right":
  //             whatHappens = 'you found a river';
  //             break;
  //         default:
  //             whatHappens = 'please enter a valid direction';
  //     }
  //     return whatHappens;
  // }
  
  // ////////////////////////////////
  
  // const compose = (f,g ) => (a) => f(g(a));
  // const sum = (num) => num + 1;
  // compose(sum,sum)(5)
  
  ////////////////////////////
  
  // class Player {
  //     constructor(name, type) {
  //         this.name = name;
  //         this.type = type
  //     }
  //     introduce(){
  //         console.log(`Hi I am ${this.name} and I am ${this.type}`);
  //     }
  // }
  
  // class Wizard extends Player{
  //     constructor(name, type){
  //         super(name,type)
  //     }
  //     play(){
  //         console.log(`WEEEEEEEEEE IM A ${this.type}`);
  //     }
  // }
  
  // const wizard1 = new Wizard('shelly' , 'healer')
  
  const basket = ["apples", "grapes", "oranges"];
  const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
  };
  //for of //iteracja po tablicy i stringu
  // for (item of basket){
  //     console.log(item);
  // }
  
  // for (letters of 'igor'){
  //     console.log(letters);
  // }
  
  //for in // //enumerating po objekcie
  
  // for (item in detailedBasket){
  //     console.log(item);
  // }
  
  // const flattend = [[0,1],[2,3],[4,5]].reduce(
  //     (a,b) => {
  //         return a.concat(b);
  // },[])
  
  // const flattend2 = [[0,1],[2,3],[4,5]].reduce(
  //     (accumulator,array) => {
  //         console.log(accumulator, 'accumulator');
  //         console.log(array, 'array');
  //         return accumulator.concat(arraym);
  // },[])
  
  // const array = [1, 2, "4", '591', 392, '391', 2, "5", 10, 2, 1, 1, 1, "20", 20];
  // let allArrays = [[],[]];
  
  // function sortedArray(numberArray) {
  //  numberArray = numberArray.sort((a,b) => a - b) 
  //   for (let i = 0; i < array.length; i++) {
  //     if (typeof numberArray[i] === "string") {
  //         allArrays[1].push(numberArray[i]);
  //         }
  //     if(typeof numberArray[i] === 'number'){
  //         allArrays[0].push(numberArray[i])
  //         }
  //     }  
  // }
  // sortedArray(array);
  // console.log(allArrays);
  
  
  // for(let z=0; z<array.length; z++){
  //     if (typeof numberArray[z] === 'number'){
  //         allArrays[0].push(numberArray[z]);
  //         }
  //     }
  
  
  // function answer(array, number){
  //   for(let i = 0; i<array.length; i++){
  //     for(let j= i+1; j<array.length; j++){
  //       if(array[i] + array[j] === number)
  //       return [array[i], array[j]]
  //     }
  //   }
  // }
  
  
  // answer([1,2,3,4,5], 7)
  
  
  // f = 15
  // e = 14
  // d = 13 
  // c =12
  // b =11 
  // a = 10
  
  // #ffffff = 15 * 15 , 15 * 15, 15*15
  // #ffffff = (225,225)
  


  //--------------------------------------------------------



  // let user = {
//     name: 'igor',
//     age: 15,
//     blogs: [{
//         title: 'why mac & cheese rules',
//         likes: 30, 
//     },
//     {
//         title: ' 10 things to make with marmite',
//         likes: 50,
//     }],
//     logBlogs(){
//         console.log('this user has written following blogs');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, `| this blog has ${blog.likes}`);
//         })
//     }
// }

// user.logBlogs()


//math object 

// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// const random = Math.random();
// console.log(Math.round(random * 100));


// DOM

// const paras = document.querySelectorAll('p');
// // console.log(para.innerText);
// console.log(paras);
// paras.forEach(para =>{
//     para.innerText +=` new text `
// })
// const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

// const people = ['mario', 'luigi', 'igor'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://gry.pl');
// console.log(link.getAttribute('href'));
// link.innerText = 'fajne gry';

// // const mssg = document.querySelector()

// link.setAttribute('class', 'anchor')
// console.log(link.getAttribute('class'));
// link.setAttribute('style', 'color: green')

// const p = document.querySelector('p');
// console.log(p.className);
// p.classList.add('error');
// p.classList.remove('error');
// p.classList.add('text')

// const paras = document.querySelectorAll('p');

// paras.forEach(paragraph =>{
//     if(paragraph.textContent.z3includes('error')){
//         paragraph.classList.add('error')
//     }
//     if(paragraph.textContent.includes('success')){
//         paragraph.classList.add('text')
//     }
// // })
// const article = document.querySelector('article');
// console.log(article.children);

// Array.from(article.children).forEach(child =>{
//     child.classList.add('text')
// })

// const title =document.querySelector('h2');
// console.log(title.parentElement);
// console.log(title.nextElementSibling);
// const button =document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('you clicked me');
// })
// const li = document.querySelectorAll('li');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button')

// button.addEventListener('click', (list) => {
//     const listItem = document.createElement('li')
//     listItem.textContent = 'something new to do';
//     ul.prepend(listItem)
// })

// // li.forEach(item => {
// //     item.addEventListener('click', (e) =>{
// //         e.stopPropagation()
// //         e.target.remove()
// //         console.log('xd');
// //     })
// // })

// ul.addEventListener('click', (e) => {
//     if(e.target.tagName === "LI"){
//         e.target.remove()
//     }
// })

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () =>{
//     console.log('oh no you have copied my pararaph');
// })

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e =>{
//     // console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
// })

// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const closeButton = document.querySelector('.popup-close');
// button.addEventListener('click', ()=>{
//     popup.style.display = 'block'
// });
// closeButton.addEventListener('click', ()=>{
//     popup.style.display = 'none'
// })

// popup.addEventListener('click', ()=>{
//     popup.style.display = 'none'
// })

// const form = document.querySelector('.signup-form');
// const e = document.querySelector('#username');   
// const feedback = document.querySelector('.feedback')
// const usernamePattern = /^[a-zA-Z0-9]{6,12}$/;

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     // console.log(form.username.value);
//     const username = form.username.value;
    
//     if(usernamePattern.test(username)){
//         console.log('good one');
//         feedback.textContent = 'valid username';
//     } else{
//         feedback.textContent = 'wrong username '
//     }
// });

// //live feedback
// form.username.addEventListener('keyup', e => {
//     if(usernamePattern.test(e.target.value)){// console.log(result);
//         form.username.setAttribute('class','valid-username')
//     } else{
//         form.username.setAttribute('class','wrong-username')
//     }
// })
// const username = 'igor';
// const pattern = /^[a-z][A-Z][0-9]{6,}$/

// let result = pattern.test(username)
// console.log(result);

// let playlist =['Despacito - Remix', "I'm the One", "Shape of you", "HUMBLE", "Swalla"];

// // playlist.forEach((track,index) => console.log(`${index+1} - ${track}`));
// // const lowerTracks = playlist.map((track, index) => track.toLocaleLowerCase())
// // const filterTracks = playlist.filter((track, index) => index < 3)
// const charCount = playlist.reduce((count, track) =>count += track.length,0)
// console.log(charCount);
// // console.log(filterTracks);
// // console.log(lowerTracks);
// console.log(playlist);