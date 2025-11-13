// Exportamos la funcion Calcularpromedio para que pueda usarse en otros archivos
export function Calcularpromedio(not1, not2, not3) {

    // Calculamos el promedio sumando las tres notas y dividiendo entre 3
    let proemdio = (not1 + not2 + not3) / 3;

    // Verificamos si el promedio es mayor o igual a 3.0
    if (proemdio >= 3.0) {
        // Si el promedio es suficiente, mostramos que aprobo
        alert("Aprobo");
    } else {
        // Si el promedio es menor, mostramos que reprobo
        alert("Reprobo");
    }

    // Retornamos el valor del promedio calculado
    return proemdio;
}
