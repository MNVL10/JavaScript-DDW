    var min = 1;
    var max = 20;
    var aleatorio = Math.floor(Math.random() * max + 1) + min;
    var intentos = 0;
    var nombre = prompt('Bienvenido al juego adivida el numero');
    var numero;

    while(intentos < 5){
        numero = parseInt(prompt(nombre+' ,ingrese un numero entre el '+min+' y el '+
            max));

        if(numero >= min && numero <= max){
            if(numero < aleatorio){
                alert('el numero que ingreso es mas bajo');
            } else if(numero > aleatorio){
                alert('el numero que ingreso es mas alto');
            }else if(numero == aleatorio){
                break;
            }
        }else{
            alert('Debe ingresar un numero entre '+min+' y '+max);
        }
        intentos++;
    }
    if(numero == aleatorio){
        alert('felicidades adivinaste el numero'+(intentos + 1 )+' intentos. ');
    }else{
        alert('agostaste el numero de intentos, suerte paar ala proxima!');
    }