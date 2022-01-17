
let studente = {
    nome: 'Marco',
    cognome : 'Fabretti',
    eta : 21,
};

let nuovaClasse = {
    nome: 'Classe#4',
    numeroStudenti: 10,
  };

for (let key in studente) {
   console.log(key);
   console.log(studente[key]);
}

let studenti = [
    {
        nome: 'Marco',
        cognome : 'Fabretti',
        eta : 21,
    },
    {
        nome: 'Andrea',
        cognome : 'Gentili',
        eta : 25,
    },
    {
        nome: 'Mattia',
        cognome : 'Maio',
        eta : 25,
    },
];

for(let i = 0; i<studenti.length; i++){
    studente = studenti[i];
    console.log("nome: " + studente.nome);
    console.log("cognome: " + studente.cognome);
};

let nomeStudente = prompt('Inserisci nome studente');
let cognomeStudente = prompt('Inserisci cognome studente');
let etaStudente = prompt('inserisci eta studente')


studenti.push({
    nome: nomeStudente,
    cognome: cognomeStudente,
    eta : etaStudente
});

for(let i = 0; i<studenti.length; i++){
    studente = studenti[i];
    console.log("nome: " + studente.nome);
    console.log("cognome: " + studente.cognome);
    console.log("eta: " + studente.eta);
};
