//Primero declarar variables
let count = 0
console.log(count);

/*Creame una variable que se llame miEdad. Pon tu edad. Imprime por consola el valor de tu edad.*/
let miEdad = 19
console.log("Tengo " + miEdad + " años");


/*Calcula tu edad en años de perro
Ratio edad perro/humano es de 7 años*/
let edadHumano = 19
let ratio = 7
let edadPerro = edadHumano * ratio
console.log("Edad en años de perro: " + edadPerro);


// Base para contar los pasajeros
let cuentas = 5
cuentas = cuentas + 2
cuentas = cuentas - 100
console.log(cuentas);


/*Creame una variable que se llame bonusPoints.
Inicializala en 50
Icrementala en 100
Decrementala en 25
Incrementala en 30
En cada incremento/decremento, imprime por consola el resultado
*/
let bonusPoints = 50
console.log(bonusPoints);
bonusPoints = bonusPoints + 100
console.log(bonusPoints);
bonusPoints = bonusPoints - 25
console.log(bonusPoints);
bonusPoints = bonusPoints + 30
console.log(bonusPoints);


/*Haz una funcion que se llame cuenta atras y que haga una cuenta atras del 5 al 1*/
function cuentaAtras() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

cuentaAtras()

/*
Cuentame los minutos totales en los que un piloto da vueltas a un circuito. 
Tu piloyo va dar de 3 a 5 vueltas, tu eliges. 
La funcion tiene que calcular el tiempo TOTAL que ha gastado en dar esas vueltas.

PISTA
3 Variables
1 Funcion(1 Variable + Console.log)
Llamada una funcion 
*/

let min = 10
let vuelta = 1

function circuito() {
    let total = min * vuelta
    console.log(total);
    vuelta = vuelta + 1
    total = min * vuelta
    console.log(total);
    vuelta = vuelta + 1
    total = min * vuelta
    console.log(total);
    vuelta = vuelta + 1
    total = min * vuelta
    console.log(total);
    vuelta = vuelta + 1
    total = min * vuelta
    console.log(total);
}

circuito()

//Otra forma de hacerlo
let vuelta1 = 2
let vuelta2 = 2.5
let vuelta3 = 5

function cicuitoVueltas() {
    let tiempoTotal = vuelta1 + vuelta2 + vuelta3
    console.log("Ha tardado en total " + tiempoTotal + " minutos");
}

cicuitoVueltas()

/*Creame una funcion que incrementa su valor en 1 y que sea ejecutada 3 veces
Trabaja con una variable que previamente se llame vueltasCompletadas*/
let vueltasCompletadas = 0
function incremento() {
    vueltasCompletadas = vueltasCompletadas + 1
    console.log("Vuelta " + vueltasCompletadas);
}

incremento()
incremento()
incremento()


/* Ej 1 Dia 18/04 Saludo Personalizado: 
Declara una funcion llamada saludar que reciba un nombre como parametro. 
La funcion debe imprimir en la consola un saludo, por ejemplo "Hola, [nombre]". 
Llama a esta funcion pasandole tu propio nombre como argumento.
*/

function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("laura")
/* 
function saludar (){
    console.log("Hola Laura");
}

saludar()
*/


/* Ej 2 Dia 18/04.  Tabla de Multiplicar: 
    Crea una funcion llamada tablaMultiplicar que reciba un numero. 
    La funcion debe imprimir la tabla de multiplicar de ese numero del 1 al 10 usando un bucle.
    Por ejemplo, si el numero es 5, debe imprimir "5 x 1 = 5", "5 x 2 = 10", etc. 
    Normalmente se hace con un for, pero no sabemos hacerlo. 
    Si sabes hacerlo con un for, hazlo.
*/
let numBase = 5
let numTable = 0

function multiplicar() {
    numTable = numTable + 1
    resultado = numBase * numTable
    console.log(numBase + " x " + numTable + " = " + resultado);
}

multiplicar()
multiplicar()
multiplicar()
multiplicar()
multiplicar()
multiplicar()
multiplicar()
multiplicar()
multiplicar()
multiplicar()



/* Ej 3 Dia 18/04.  Convertidor de Temperatura:
    Declara una funcion convertirCelsiusAFahrenheit que tome una temperatura en Celsius y 
    la convierta a Fahrenheit, usando la formula \( F = C \times 9/5 + 32 \). 
    La funcion debe imprimir el resultado en la consola. Usa constantes, no variables. 
    Aunque no lo hayamos dado, mira como declarar una constante en JS.
*/
let celsius = 20

function convertirCelsiusAFahrenheit() {
    const formula = celsius * 9 / 5 + 32
    console.log(celsius + 'ºC es igual a ' + formula + 'ºF');
}

convertirCelsiusAFahrenheit()

/*
Coreccion

function convertirCelsiusAFahrenheit(celsius){
    const fahrenheit = celsius * 9/5 + 32;
    console.log(celsius + 'ºC es igual a ' + formula + 'ºF');
}

convertirCelsiusAFahrenheit(20)
*/



/* Ej 4 Dia 18/04. Calculadora de IVA: 
    Escribe una funcion calcularIVA que reciba el precio de un producto como argumento. 
    La funcion debe calcular el 21% de IVA sobre ese precio 
    y retornar el precio final incluido el IVA. 
    Luego, imprime este precio final en la consola.
*/

function calcularIVA(precioBase) {
    precioFinal = precioBase * 0.21 + precioBase
    console.log('El precio final son ' + precioFinal);
}

calcularIVA(20)



/* 24/04
    Creame una variable que almacene el String: "Tienes 5 notificaciones"
*/

let cadena = "tienes 5 notificaciones"
console.log(cadena);

/* 02/04
    Creame una variable que almacene la informacion completa y haga un saludo
    con la notificacion anterior
 */
let username = "Laura"
let saludoCompleto = username + ", " + cadena
console.log(saludoCompleto);



/* 02/04
    Crear 2 variables, nombre y saludo
    La varibable nombre debe alamacenar su nombre y el saludo debe almacenar
    "Hola, mi nombre es ". Crea una tercera variable, miSaludo, que contenga
    las dos cadenas y registra miSaludi en la consola
*/

let nombre = "Laura"
let saludo = "Hola, mi nombre es "
let miSaludo = saludo + nombre
console.log(miSaludo);


/* 02/04
    Hazme un pequeño ejercicio que calcule unos puntos y unos
    bonusPoints pero no en formato int (numero), ni double (numerico con comas),
    sino en STRING.
    Hazme una variable 1 y una variable 2 e imprime el resultado de su suma por consola
*/
let num1 = "2"
let num2 = "3"
console.log(num1 + num2);

/* Correccion*/
let points = "2"
let bonusPoint = "3"
let totalPoint = points + bonusPoint
console.log(totalPoint);