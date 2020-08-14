//PDR1
let numero = parseFloat(prompt('escriba un año'));
if ((numero %100 !=0) && (numero %4==0) || (numero %400==0)) {
    console.log('El año si es bisiesto');
}else{
    console.log('El año no es bisiesto');
}


