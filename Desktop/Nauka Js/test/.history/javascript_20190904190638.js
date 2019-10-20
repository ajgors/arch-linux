function mixed(text){
    let mixText = ''
    for(let i=0; i<text.length; i++){
        if(i % 2 !== 0){
            mixText += text[i].toUpperCase()
        }else{
            mixText text[i].toLowerCase()
        }
    }
}


let text = 'igor jest super' 
console.log(mixed(text))