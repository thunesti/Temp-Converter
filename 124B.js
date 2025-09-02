/*

Oppgave 124 B:

Lag en funksjon som regner om temperatur fra Celsius til Fahrenheit.

Formelen er temperatur * 9/5 + 32.

*/

let celcius = 18
let fahrenheit = 0

function calculate() {
    fahrenheit = celcius * 9/5 + 32;
    console.log(fahrenheit);
}

calculate()