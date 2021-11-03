/* Algoritmo 1 

for (let i = 1; i <= 10; i++) {
    let equipo = prompt("Ingresá tu equipo de futbol favorito");

    alert(`Tu equipo es ${equipo} y quedó en el puesto ${i}`);    
}

*/

/* Algoritmo 2 */

let equipo = prompt("Ingresá tu equipo favorito, puede ser A o B");
let equipoA = 0;
let equipoB = 0;

while(equipo != "ESC"){

    if( equipo == "a" || equipo == "A"){
        equipoA = equipoA +1;
    
    } else if( equipo == "b" || equipo == "B"){
        equipoB = equipoB +1;

    } else {
        console.log("Sin votar");
    }

    equipo = prompt("Ingresá tu equipo favorito, puede ser A o B");

}

console.log("equipoA tiene " + equipoA);
console.log("equipoB tiene " + equipoB);

if( equipoA > equipoB ){
    console.log("Ganó el equipo A");
} else if ( equipoA == equipoB) {
    console.log("Empate");
} else{
    console.log("Ganó el equipo B");
}