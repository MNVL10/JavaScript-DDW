//PDR4
let texto = prompt('escriba un texto');
let caracter = prompt('escriba un caracter');
let arreglo = [];
for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter) {
        arreglo.push(i);
    }
    
}
console.log(`El caracter ${caracter} se repite:`, arreglo.length, 'veces en el texto');
