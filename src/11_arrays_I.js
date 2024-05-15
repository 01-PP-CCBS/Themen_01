
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

arr = [];
arr = [2,11,7,8,10,21] // Array mit Elementen

//output(arr.length); Anzahl Einträge
output(arr[0]);  // erste Posi
output(arr[arr.length-1]);  // letzte posi



/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +               
                PUNCT;
    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


