
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

//2 Ziffern einlesen
let a = prompt("erster Wert: ");
let b = prompt("zweiter Wert: ");

//eigentliche Addition
let c = Number(a) + Number(b);

//Ausgabe
console.log("Summe aus " + a + " + " + String(b) +" ergibt: " + c);
