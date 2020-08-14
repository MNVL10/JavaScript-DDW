var resultado1, resultado2;
var a = prompt("intoduce la variable A");
var b = prompt("intoduce la variable B");
var c = prompt("intoduce la variable C");

if(Math.sqrt(b*b - 4 * c ) > 0){
    resultado1 = (-b + Math.sqrt(b*b - 4 * c)) / (2 * a);
    resultado1 = (-b + Math.sqrt(b*b - 4 * c)) / (2 * a);

    document.write("resulta 2: " +resultado1 );
    document.write("<br/>resultado 2 + " +resultado2)

}
else{
    document.write("resultado inexistente porque la raiz cuadrada ha dado menor que cero");
}
