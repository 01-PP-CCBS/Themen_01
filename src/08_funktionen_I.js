
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