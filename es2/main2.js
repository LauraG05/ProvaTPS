
// fetch 
const chiaveAutorizzazione = "a0356cc3-1ff5-4652-9497-110d6988d3e0";
const urlLogin = "https://ws.progettimolinari.it/credential/login";
const header = {
    "content-type": "application/json",
    key: chiaveAutorizzazione
};

const login = (username, password) =>{
    return new Promise((resolve,reject)=>{
        fetch(urlLogin,{
            method: "POST",
            headers: header,
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => resolve(response.json()))
        .catch(error => reject(error));
    })
}

// richiesta informazioni
const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Inserire user', user => {
    console.log('User: ${user}');
    readline.question('Inserire password',  password=> {
        console.log('Password: ${password}');
        salvaDati(user, password);
    })
    readline.close();
})

