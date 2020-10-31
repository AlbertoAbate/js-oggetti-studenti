// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
var persona = {
  nome: "Alberto",
  cognome: "Abate",
  età: "33"
}

  var text = "";
  var i;
  for (i in persona) {
    text += persona[i];
  }
console.log(text);
document.getElementById('dati').innerHTML = "i tuoi dati sono " + text;

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var i;
var studente = [
  ["Alberto Abate", "Paolo Duzioni", "Lorenzo Balsano", "Fabio Giorgini"],

];

for (var i = 0; i < studente.length; i++) {
  console.log("studente " + (i + 1) );
  console.log( studente[i] );

  for (var j = 0; j < studente[i].length; j++) {
    console.log("studente " + studente[i][j]);
  }
}
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
var nome = prompt("qual è il tuo nome?");
var cognome = prompt("qual è il tu cognome?");
var età = parseInt(prompt("quanti anni hai?"));

var objectUser = {
  nome,
  cognome,
  età
}

studente.push(objectUser);

for (var i = 0; i < studente.length; i++) {
       console.log(studente[i]);
   }
