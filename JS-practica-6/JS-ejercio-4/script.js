let numero1 = 2002;
let define_espacio = 20;

let funcion = alinearDerecha(numero1,define_espacio);

function alinearDerecha(numero1,define_espacio) {
    let string = numero1.toString(); 
    let espacios = ' ';

    for(let i = string.length; i < define_espacio; i++) {
        espacios += ' ';       
    }
    return console.log(espacios,string);
}
