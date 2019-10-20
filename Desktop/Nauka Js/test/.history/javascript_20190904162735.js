let text = "ALA ma kota";

// console.log(text.toLowerCase())
// console.log(text.toUpperCase())


for(let i=0; i<text.length; i++){
    
    if(i % 2 ===0){
        text[i].toLocaleUpperCase()
    }
    console.log(text[i])


}