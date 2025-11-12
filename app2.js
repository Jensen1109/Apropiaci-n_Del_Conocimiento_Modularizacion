import { Calcularpromedio } from "./modulos/calcularpromedio.js";
    // Pedimos al usuario que ingrese las tres notas
    let not1 = parseFloat(prompt("Ingrese la nota 1: "));
    let not2 = parseFloat(prompt("Ingrese la nota 2: "));
    let not3 = parseFloat(prompt("Ingrese la nota 3: "));

alert(Calcularpromedio(not1,not2,not3))