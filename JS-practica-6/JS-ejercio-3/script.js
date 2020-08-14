let ingreso = parseFloat(prompt('el primer número'));
let primo = true;
const funcion = getesPrimo(ingreso);
let resultado = getesPrimo(ingreso);
console.log(resultado);


function getesPrimo (ingreso) {
    if (ingreso>=2) {
        if (ingreso == 0 || ingreso == 1 || ingreso ==4) {
            primo=false;
        }for (let i = 2; i < ingreso; i++) {
            if (ingreso % i ==0) {
                primo = false;
            }    
        }
        if (primo) {
            ;return true;
        }else{
            return false;
        }
    }
}
