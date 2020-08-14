//PDR5
let ingreso = parseFloat(prompt('Adivine el número secreto del 1 al 100'));
let contador = 0 && 1;
let secreto = 23;
let cero = 0;

    while (ingreso != secreto && ingreso != cero ) {
        if (ingreso > secreto) {
            console.log('El número que ingresó es mayor')
        }else{
            console.log('El número que ingresó es menor')
        }
        ingreso = parseFloat(prompt('Adivine el número'));
    }
    console.log('Adivinaste!');