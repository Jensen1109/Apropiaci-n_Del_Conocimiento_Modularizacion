// Creamos una funcion llamada Calcularpromedio con tres parametros
function Calcularpromedio(not1, not2, not3) {

    // Pedimos al usuario que ingrese las tres notas
    not1 = parseFloat(prompt("Ingrese la nota 1: "));
    not2 = parseFloat(prompt("Ingrese la nota 2: "));
    not3 = parseFloat(prompt("Ingrese la nota 3: "));

    // Calculamos el promedio
    let promedio = (not1 + not2 + not3) / 3;

    // Verificamos si el promedio es mayor o igual a 3.0
    if (promedio >= 3.0) {
        alert("Aprobó"); // Mensaje si aprueba
    } else {
        alert("Reprobó"); // Mensaje si reprueba
    }

    // Retornamos el promedio
    return promedio;
}

// Ejecutamos la funcion
Calcularpromedio();
