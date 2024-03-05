// 2 - SUMA NÚMEROS

// - Se te piden dos números y te muestra la suma

// - Te pregunta después: “¿quieres continuar(S / N) ?”

// - Si es que sí, vuelves a preguntar los números y sumarlos

// - Si es que no, sales del bucle y te despides.

// Puedes probar primero a hacer sólo la lógica mediante console.log y después trabajar la presentación:

// - ya sea mediante prompt / alerts(nivel 1)

//     - o mediante el uso del DOM(getElementById / querySelector / .value / innerHTML)(nivel 2)

var n1 = 0;
var n2 = 0;

function suma(n1, n2) {

    let seguir = prompt("¿Desea empezar a sumar números? S/N");
    while (seguir !== 'N') {
        n1 = parseFloat(prompt("Escribe el primer número a sumar: "));
        n2 = parseFloat(prompt("Escribe el segundo número a sumar: "));
        res = n1 + n2;
        alert("El resultado es: " + (res));
        seguir = prompt("¿Desea continuar sumando números? S/N");
    }
    alert("Gracias por sumar números con nuestra calculadora online")
}
