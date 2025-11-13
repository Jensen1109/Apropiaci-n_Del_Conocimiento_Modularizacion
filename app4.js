import { CalcularSubtotal, CalcularIva, CalcularTotal } from "./modulos/valortotal.js";

// Pedimos al usuario los datos necesarios
let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "))
let precio = parseFloat(prompt("Ingrese el precio del producto: "))

// Usamos las funciones para calcular cada parte
let Subtotal = CalcularSubtotal(cantidad,precio);
let iva = CalcularIva(Subtotal);
let total = CalcularTotal(Subtotal,iva);

// Mostramos el resultado final
alert(`subtotal: ${Subtotal} iva(19%): ${iva} total a pagar: ${total}`)

CalcularSubtotal(cantidad,precio)
CalcularIva(Subtotal)
CalcularTotal(Subtotal,iva)