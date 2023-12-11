const nombre = prompt('Ingresá tu nombre y apellido');
    alert ('Hola ' + nombre +'!' + ' ' + 'Bienvenid@ a Grill & Go');

const tipoDeHamburguesa = prompt('Querés una hamburguesa simple, doble o triple?')
    if (tipoDeHamburguesa == 'simple') {
        alert('La hamburguesa simple te costará 500$.')
    }
    else if (tipoDeHamburguesa == 'doble') {
        alert('La hamburguesa doble te costará 800$.')
    }
    else if (tipoDeHamburguesa == 'triple') {
        alert('La hamburguesa triple te costará 1200$.')
    }
    else {
        alert('Elegí bien la hamburguesa para saber cuanto te costará.')
    }
const direccion = prompt('A que dirección querés que te enviemos el pedido?');

let direccionCorrecta = prompt('Es correcta la dirección ' + direccion + '?' );

    if (direccionCorrecta === 'si') {
        alert('Perfecto! ' + nombre + ' Te enviaremos el pedido a ' + direccion + '.');
    }
    else {
        alert( nombre + ', no te preocupes. Indicanos la dirección correcta');
    }


let cantidadHamburguesas = Number(prompt('Indicá la cantidad de hamburguesas'));
    alert ("Pediste " + cantidadHamburguesas + ' ' + 'hamburguesas.'); 
while (cantidadHamburguesas < 10) {
    cantidadHamburguesas = cantidadHamburguesas + 1;
    console.log ("Ciclo hamburguesa " + cantidadHamburguesas);
    }
