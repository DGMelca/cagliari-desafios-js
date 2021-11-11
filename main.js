class producto{

    constructor (nombre, descripcion, precio, stock){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
    
    comprar(){
        console.log(`Felicidades, sumaste ${this.nombre} a tu carrito!`);
    }
    
    iva(){
        this.precio = this.precio * 1.21;
        console.log(`Tu producto queda a $ ${this.precio}`);
    }
    
}

/*
const shampooSolido = new producto('Shampoo Sólido', 'Aceite esencial de menta, ideal para cabellos grasos', 350, 100);
console.log(shampooSolido);

shampooSolido.comprar();
shampooSolido.iva();

const acondicionadorSolido = new producto('Acondicionador Sólido', 'Acción desenredante para todo tipo de cabellos', 380, 50);
console.log(acondicionadorSolido);

acondicionadorSolido.comprar();
acondicionadorSolido.iva();

const jabonCorporal = new producto('Jabón corporal', 'Cremoso y exfoliante, ideal para uso cotidiano', 200, 20);
console.log(jabonCorporal);

jabonCorporal.comprar();
jabonCorporal.iva();
*/

/* Desafio 6 */

let listaDeProductos = [
    {
        nombre: "Shampoo Sólido",
        descripcion: "Aceite esencial de menta, ideal para cabellos grasos",
        precio: 350,
        stock: 100
    },
    {
        nombre: "Acondicionador Sólido",
        descripcion: "Acción desenredante para todo tipo de cabellos",
        precio: 380,
        stock: 50
    },   
    {
        nombre: "Jabón corporal",
        descripcion: "Cremoso y exfoliante, ideal para uso cotidiano",
        precio: 200,
        stock: 20
    }
]

console.log(listaDeProductos);

let buscar = listaDeProductos.find(listaDeProductos => listaDeProductos.stock <= 20);
console.log(buscar);



/*
//Aplicar descuentos

alert('Sumá tus productos favoritos');
let carrito = shampooSolido.precio + acondicionadorSolido.precio + jabonCorporal.precio;

let precioPromo = 0;
let voucher = prompt ("Ingresá tu voucher de descuento");

function descuentoPromo (carrito, voucher) {
    precioPromo = carrito - voucher;
}
descuentoPromo(carrito,voucher);
alert(`Felicidades! Aplicaste tu voucher, el producto te queda a $ ${precioPromo}.`);


// Calcular cantidad de cuotas

let financiacion = 0;
let cuotas = prompt ("Ingresá la cantidad de cuotas que desea:");


function calcularCuotas (precioPromo, cuotas) {
        return precioPromo / cuotas;
    }

financiacion = calcularCuotas(precioPromo,cuotas);
    if (cuotas <=12){
        console.log(`Tu producto queda financiado en ${cuotas} cuotas de $ ${financiacion}.`);
    }else console.log("Disculpá, la cantidad de coutas es superior al permitido.");

*/

