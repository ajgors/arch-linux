let stars = '';


for(let i =0; i<6; i++){
    stars += '*'
    for(let y=0; y<6; y++){
        stars += '/n/*'
    }
}
console.log(stars)