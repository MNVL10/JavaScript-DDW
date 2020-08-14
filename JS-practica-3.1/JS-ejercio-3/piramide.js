let usuario = parseInt(prompt("Digite un numero"));
let asterisco = " * ";
let espacio = " ";
let contador = 0;

while(contador < usuario){
    espacio += asterisco;
    console.log(espacio);
    contador++;
}
