/* Consegna:
Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

// chiedere all'utente il nome
let NameUser = prompt('Inserisci qui il tuo nome');

console.log(NameUser);

//chiedere all'utente il cognome
let SurenameUser = prompt('Inserisci qui il tuo cognome');

console.log(SurenameUser);

//chiedere il colore preferito
let FavColorUser = prompt('Inserisci qui il tuo colore preferito');

console.log(FavColorUser);

//restituire il nome della password con nome + cognome + colore + 23
let NumberID = parseInt(23);

let PwUser = NameUser + SurenameUser + FavColorUser + NumberID;

document.getElementById('PwText').innerHTML = ' La tua password è: ' + PwUser;

console.log(PwUser);