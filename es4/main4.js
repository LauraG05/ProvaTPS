
const fibonacci = (n) => {
    if (n <=1) {
        return n;
    } else {
        const res = fibonacci (n - 1) + fibonacci(n - 2);
        console.log(res);
        return res;
    }
}


// richiesta informazioni
const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout
});
readline.question("Inserire un numero: ", inserito => {
    setImmediate(() => {
        console.log("Sequenza: ");
        fibonacci(parseInt(inserito));
    });
    readline.close();
});