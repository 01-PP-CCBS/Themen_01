
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call(er)
// test();

// Funktionsruf | Callee
// Funktionsdeklaration
function test() 
{
    console.log("Hallo tralala!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionsaufruf

outputNames();

function outputNames(params) 
{
    let firstName = "Esther";

    console.log("Hallo, " + firstName + "!");    
}

// console.log(firstName); // Fehler: scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

outputNames2("Esther");
outputNames2("Jan");

function outputNames2(firstName) 
{
    console.log("Hallo, " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

const prompt = require('prompt-sync')({sigint: true});
outputNames3(prompt("Vorname : "),prompt("Nachname : "));

function outputNames3(firstName, familyName) 
{
    console.log("Hallo, " + firstName + " " + familyName + "!");
}