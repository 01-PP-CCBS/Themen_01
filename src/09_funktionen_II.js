

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/


const prompt = require('prompt-sync')({sigint: true});
const zahl1 = prompt("Bitte Zahl 1 eingeben: ");
const zahl2 =  parseInt(prompt("Bitte Zahl 2 eingeben: ")); // "2" --> 2
const operator = prompt("Bitte +, -, *, / eingeben: ");
const ERROR_STR_DIV = "div by zero";

function output(outputData) {
	console.log(outputData);
}

if (!isNaN(zahl1) && !isNaN(zahl2)) 
{
	switch (operator) {
		case "+":
			output(Number(zahl1) + Number(zahl2));	
			break;
		case "-":
			output(Number(zahl1) - Number(zahl2));	
			break;
		case "*":
			output(Number(zahl1) * Number(zahl2));	
			break;
		case "/":
			if (zahl2 == 0) {	
				output(ERROR_STR_DIV);
				break;			
			}
			output(Number(zahl1) / Number(zahl2));	
			break;
							
		default:
			output("Fehlerhafte Eingabe!");	
			break;
	}
}
else{
	output("keine Zahl eingegeben!")
}
  