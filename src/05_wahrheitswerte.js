
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
let date = new Date ();
let year = date.getFullYear();

isJohnEqual = (ageJohn == ageMark);
isJohnOlder = (ageJohn > ageMark);

ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("Datum: " + date);

console.log("isJohnEqual: " + isJohnEqual);
console.log("isJohnOlder: " + isJohnOlder);

