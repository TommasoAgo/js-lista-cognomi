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
// for ( var i = 0; i < arrayCognomi.length; i++ ) {
//     console.log(arrayCognomi[i] + " " + parseInt(i + 1));
// }

// Ciclo While
var i = 0;
while ( i < arrayCognomi.length ) {
    console.log(parseInt(i + 1) + " " + arrayCognomi[i]);

    i++;
}