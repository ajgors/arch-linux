const text = "ALA ma kota";

// console.log(text.toLowerCase())
// console.log(text.toUpperCase())

let textMix = '';


for(let i=0; i<text.length; i++){
    if(i % 2 !== 0){
        textMix += text[i].toLowerCase()
    }else{
        textMix += text[i].toUpperCase()
    }
}
console.log(textMix)

const number = 4


switch(number){
    case 1:
        console.log('cyfra rowna sie 1')
    break

}