const distanza = parseInt(prompt("inserisci la distanza da percorrere"));
const età = parseInt(prompt("età del passeggero"));
const prezzoBiglietto = 0.21 * distanza;
//console.log(prezzoBiglietto);
let scontoMin = 20 / 100 * prezzoBiglietto;
let scontoOv = 40 / 100 * prezzoBiglietto;
let scontoMinorenni;
let scontoOver65;

if(età < 18){
    let scontoMinorenni = prezzoBiglietto - scontoMin;
    console.log(`prezzo del biglietto ${scontoMinorenni.toFixed(2)}`);
} else if(età > 65){
    let scontoOver65 = prezzoBiglietto - scontoOv;
    console.log(`prezzo del biglietto ${scontoOver65.toFixed(2)}`);
} else {
    console.log(`prezzo del biglietto ${prezzoBiglietto.toFixed(2)}`);
}