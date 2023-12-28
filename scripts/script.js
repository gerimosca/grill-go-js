// Objetos de hamburguesa

const hamburguesa1 = {
  nombre: 'Classic Burger',
  ingredientes: ['carne', 'rucula', 'tomate', 'queso', 'salsa'],
  precio: 9.5,
};

const hamburguesa2 = {
  nombre: 'Vegetarian Burger',
  ingredientes: ['falafel', 'lechuga', 'tomate', 'queso vegano', 'salsa vegana'],
  precio: 8.5,
};

const hamburguesa3 = {
  nombre: 'doble burger',
  ingredientes: ['carne doble', 'lechuga', 'zanahoria', 'queso cheddar', 'mayonesa'],
  precio: 12.5,
};

// Array hamburguesas
const hamburguesas = [hamburguesa1, hamburguesa2, hamburguesa3];

// Function por nombre
const searchBurgerForName = (nombre) => {
  const nombreMinuscula = nombre.toLowerCase();
  return hamburguesas.find((hamburguesa) => hamburguesa.nombre.toLowerCase() === nombreMinuscula);
};

// Function filtrado ingredientes
const filtrarHamburguesasPorIngrediente = (ingrediente) => {
  return hamburguesas.filter((hamburguesa) => hamburguesa.ingredientes.includes(ingrediente));
};

// Function final
const main = () => {
  const nombreHamburguesa = prompt('Ingresá el nombre de la hamburguesa:');
  const hamburguesaBuscada = searchBurgerForName(nombreHamburguesa);

  if (hamburguesaBuscada) {
    console.log(`¡¡La tenemos..!!
        Nombre: ${hamburguesaBuscada.nombre}
        Ingredientes: ${hamburguesaBuscada.ingredientes.join(', ')}
        Precio: €${hamburguesaBuscada.precio}`);

    alert(`El precio de ${hamburguesaBuscada.nombre} es €${hamburguesaBuscada.precio}`);
  } else {
    console.log('Lo sentimos, no se encontró esta hamburguesa en el menú.');
    alert('Lo sentimos, no se encontró esta hamburguesa en el menú');
  }

  const ingredienteFiltrar = prompt('Ingresá un ingrediente para filtrar las hamburguesas:');

  const hamburguesasFiltradas = filtrarHamburguesasPorIngrediente(ingredienteFiltrar);

  console.log(`Hamburguesas con ${ingredienteFiltrar}:
  ${hamburguesasFiltradas.map((hamburguesa) => hamburguesa.nombre).join(', ')}`);
};

main();
