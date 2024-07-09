// Valor remera en Pesos Argentinos
const precioRemera = 6500;

// Solicitar nombre y apellido
let nombreUsuario = prompt("Ingrese su nombre: ").toUpperCase();
let apellidoUsuario = prompt("Ingrese su apellido: ").toUpperCase();

// Saludo
alert ("¡Hola " + nombreUsuario + " " + apellidoUsuario + "! " + "Bienvenido a la tienda Yonkys" );

// Declarar productos
let producto1 = "Remera 1";
let producto2 = "Remera 2";
let producto3 = "Remera 3";

// Mostrar opciones de producto
let opcionesProductos = "\nOpciones de productos:\n" + "Cada Remera vale 6500$\n";
opcionesProductos += `1. ${producto1}\n`;
opcionesProductos += `2. ${producto2}\n`;
opcionesProductos += `3. ${producto3}\n`;
alert(opcionesProductos);

// Solicitar selección de producto
let productoElegido = parseInt(prompt("Ingrese el número del producto que desea comprar: "));

// Validar selección de producto
if (isNaN(productoElegido) || productoElegido < 1 || productoElegido > 3) {
  alert("Error: El número de producto ingresado no es válido.");
} else {
  // Mostrar información del producto seleccionado
  let productoSeleccionado;
  switch (productoElegido) {
    case 1:
      productoSeleccionado = producto1;
      break;
    case 2:
      productoSeleccionado = producto2;
      break;
    case 3:
      productoSeleccionado = producto3;
      break;
  }
  alert(`\nProducto seleccionado: ${productoSeleccionado}`);

  // Solicitar cantidad del producto seleccionado
  let cantidadProducto = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado} que desea comprar: `));

  // Validar cantidad del producto seleccionado
  if (isNaN(cantidadProducto) || cantidadProducto < 1) {
    alert("Error: La cantidad ingresada no es válida.");
  } else {
    // Calcular total sin descuento
    let totalSinDescuento = cantidadProducto * precioRemera;
    alert(`Total sin descuento: ${totalSinDescuento} pesos argentinos.`);

    // Aplicar descuento del 10% si se compran 3 o más remeras
    if (cantidadProducto >= 3) {
      let totalConDescuento = aplicarDescuento(totalSinDescuento);
      alert(`Total con descuento del 10%: ${totalConDescuento} pesos argentinos.`);
    } else {
      alert("No se aplica descuento.");
    }
  }
}

// Función para aplicar descuento del 10%
function aplicarDescuento(total) {
  return total * 0.9; // Descuento del 10%
}
