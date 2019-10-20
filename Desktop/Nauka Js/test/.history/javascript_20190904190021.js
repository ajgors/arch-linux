function sumeTab(tab){
    let sum = 0;

    tab.forEach((e,i) => {
    console.log(e)
    sum += e
    });



console.log(sum)
}

const arr = [1,2,3,4,5,5,6,6,7,8,9];
console.log(sumeTab(arr))