// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente 
// si trova (facciamo questo in 2 versioni: col ciclo for e col while)


// Creo un Array con i cognomi
var arrayCognomi = ["Faragli", "Totti", "Ginanneschi", "Papparapa"];

// Chiedo all'utente di inserire il suo cognome
var cognomeUtente = prompt('Inserisci il tuo cognome: ');

// Inserisco il cognome dell'utente nell'Array
arrayCognomi.push(cognomeUtente);

// Ordino i cognomi in ordine alfabetico
arrayCognomi.sort();

// Ciclo For
var listaCognomi = "";

for ( var i = 0; i < arrayCognomi.length; i++ ) {
    listaCognomi += "<li>" + parseInt(i + 1) + " " + arrayCognomi[i] + "</li>";
}

document.getElementById('lista-cognomi').innerHTML = listaCognomi;

// Ciclo While
// var listaCognomi = "";

// var i = 0;
// while ( i < arrayCognomi.length ) {
//     listaCognomi += "<li>" + parseInt(i + 1) + " " + arrayCognomi[i] + "</li>";

//     i++;
// }

// document.getElementById('lista-cognomi').innerHTML = listaCognomi;