
/*const fibonacci = (n) => {
    if (n <=1) {
        return n;
    } else {
        const res = fibonacci (n - 1) + fibonacci(n - 2);
        return res;
    }
}
*/

function fibonacci (n) {
    let F=[];
    if(n===2){
        F=[1,1];
    }else{
        F=fibonacci(n-1);
        F.push(F[n-2]+F[n-3]);
    }
    return F;
    }

    
// richiesta informazioni
const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout
});
readline.question("Inserire un numero: ", inserito => {
    setImmediate(() => {
        console.log("Sequenza: ");
        console.log(fibonacci(inserito));
    });

    readline.close();

});