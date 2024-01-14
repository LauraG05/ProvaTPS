
// fetch 
const chiaveAutorizzazione = "a0356cc3-1ff5-4652-9497-110d6988d3e0";
const header = {
    "content-type": "application/json",
    key: chiaveAutorizzazione
};


export function salvaDati(dati, chiaveBody) {
    return new Promise((resolve, reject) => {
      fetch("https://ws.progettimolinari.it/cache/set", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "key": chiaveAutorizzazione
        },
        body: JSON.stringify({
          key: chiaveBody,
          value: JSON.stringify(dati)
        })
      })
        .then(response => {
          if (response.ok) {
            resolve('Dati caricati con successo.');
          } else {
            throw new Error('Errore durante il caricamento.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };


// richiesta informazioni
const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Inserire chiave', chiave => {
    console.log('Chiave: ${chiave}');
    readline.question('Inserire valore',  val=> {
        console.log('Valore: ${val}');
        salvaDati(chiave, val);
    })
    readline.close();
})


