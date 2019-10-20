const txt = 'igor jest super';
let mix =''

for(const letter of txt){
    if(letter % 2 === 0){
        console.log(letter)
        mix += letter.toUpperCase()
    }else{
        mix += letter.toLowerCase()
    }
}
console.log(mix)