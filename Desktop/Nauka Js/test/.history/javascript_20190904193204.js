const tab = [
    { name: 'Marcin' , height : 183 },
    { name: 'Ania' , height : 173 },
    { name: 'Agnieszka' , height : 170 },
]

//dla sort spokojnie możemy używać funkcji anonimowej
const tab2 = tab.sort(function(a, b) {
    return a.height - b.height;
});

console.log(tab2);