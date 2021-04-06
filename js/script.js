var myName = prompt(
  "Qual' é il tuo nome?");

var mySurname = prompt("Qual' é il tuo cognome?");

var myFavouriteColor = prompt("Qual' é il tuo colore preferito?");


document.getElementById('presentation').innerHTML = "Ciao, sono " + myName + " " + mySurname + ".<br> Il mio colore preferito é " + myFavouriteColor + "."
console.log();