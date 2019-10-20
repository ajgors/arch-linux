//dates & times
const before = new Date('February 1 2019 7:30:59')
const now = new Date();
// console.log(now, typeof now);

// years,month,days, times
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

//timestamps

const diff = now.getTime() - before.getTime()
console.log(now.getTime(),diff);


const mins = Math.round(diff / 1000 / 60 );
const hours = Math.round(mins / 60 );
console.log(mins,hours);
//date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());