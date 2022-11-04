// Creare una password con i dati dell'utente

// chiedere il nome

let nome = prompt ("Per creare la tua password,inserisci il tuo nome");

// chiedere il cognome

let cognome = prompt ("Ora inserisci il tuo cognome");

// chiedere il colore preferito

let colorePreferito = prompt ("Ed infine inserisci il tuo colore preferito");

// risultato password formata da : nomecognomecolorepreferito21

document.getElementById("password").innerHTML = nome + cognome + colorePreferito + 21;

// debug

console. log (nome,cognome,colorePreferito);
