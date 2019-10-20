let evenNr = null;
while (true) { //nieskończony warunek
    evenNr = Math.floor(Math.random() * 1000);
    console.log()
    if (evenNr % 2 === 0) {
        break;
    }
}
