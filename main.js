
/* Desafio4  */

//Calcular IVA

alert("Comprá tu producto favorito");

let precioFinal = 0;

function agregarIva (precioInicial, iva) {
    precioFinal = precioInicial * iva;
}
agregarIva(200,1.21);
alert(`El producto sale $ ${precioFinal}, compralo YA`);

//Aplicar descuentos

let precioPromo = 0;
let voucher = prompt ("Ingresá tu voucher de descuento");

function descuentoPromo (precioFinal, voucher) {
    precioPromo = precioFinal - voucher;
}
descuentoPromo(precioFinal,voucher);
alert(`Felicidades! Aplicaste tu voucher, el producto te queda a $ ${precioPromo}.`);
