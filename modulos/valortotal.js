// Funcion que calcula el subtotal: cantidad × precio
export function CalcularSubtotal(cantidad , precio)
{
    return cantidad * precio;
}

// Funcion que calcula el IVA (19%) sobre el subtotal
function CalcularIva(Subtotal)
{
    return Subtotal * 0.19;
}

// Funcion que calcula el total a pagar: subtotal + IVA
function CalcularTotal(Subtotal,iva)
{
    return Subtotal + iva;
}

// Pedimos al usuario los datos necesarios
let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "))
let precio = parseFloat(prompt("Ingrese el precio del producto: "))

// Usamos las funciones para calcular cada parte
let Subtotal = CalcularSubtotal(cantidad,precio);
let iva = CalcularIva(Subtotal);
let total = CalcularTotal(Subtotal,iva);

// Mostramos el resultado final
alert(`subtotal: ${Subtotal} iva(19%): ${iva} total a pagar: ${total}`)