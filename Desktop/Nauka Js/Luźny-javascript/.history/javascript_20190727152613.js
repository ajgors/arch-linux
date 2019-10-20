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

const bill = (products,)