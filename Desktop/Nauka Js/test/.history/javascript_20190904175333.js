let evenNr = null;
while (true) { //nieskończony warunek
    evenNr = Math.floor(Math.random() * 1000);

    if (evenNr % 2 === 0) {
        break;
    }
}
