// //dates & times
// const before = new Date('February 1 2019 7:30:59')
// const now = new Date();
// // console.log(now, typeof now);

// // years,month,days, times
// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getDay());
// // console.log(now.getHours());
// // console.log(now.getMinutes());
// // console.log(now.getSeconds());

// //timestamps

// const diff = now.getTime() - before.getTime()
// console.log(now.getTime(),diff);


// const mins = Math.round(diff / 1000 / 60 );
// const hours = Math.round(mins / 60 );
// const days = Math.round(hours / 24 );
// console.log(mins,hours,days);

// const timestamps = 1645645999943;
// console.log(new Date(timestamps));

// //date strings
// // console.log(now.toDateString());
// // console.log(now.toTimeString());
// // console.log(now.toLocaleString());





const clock = document.querySelector('.clock');
// const span = document.createElement('span');

const tick = () =>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    // span.innerHTML = `${h} : ${m} : ${s}`
    
    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;
    clock.appendChild(htm)
}
setInterval(tick,1000);