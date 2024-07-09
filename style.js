// Valor remera en Pesos Argentinos
const precioRemera = 6500;

// Capturar entradas mediante prompt()
let nombreUsuario = prompt("Ingrese su nombre: ").toUpperCase();
let apellidoUsuario = prompt("Ingrese su apellido: ").toUpperCase();

// Saludo
alert(`¡Hola ${nombreUsuario} ${apellidoUsuario}! Bienvenido a la tienda Yonkys`);

// Declarar productos
const productos = ["Remera 1", "Remera 2", "Remera 3"];

// Función para mostrar opciones de productos
function mostrarOpcionesProductos() {
  let opcionesProductos = "\nOpciones de productos:\nCada Remera vale 6500$\n";
  productos.forEach((producto, index) => {
    opcionesProductos += `${index + 1}. ${producto}\n`;
  });
  return opcionesProductos;
}

// Función para solicitar y validar selección de producto
function seleccionarProducto() {
  let productoElegido = parseInt(prompt("Ingrese el número del producto que desea comprar: "));
  
  // Validar selección de producto
  if (isNaN(productoElegido) || productoElegido < 1 || productoElegido > productos.length) {
    alert("Error: El número de producto ingresado no es válido.");
    return null;
  } else {
    return productos[productoElegido - 1];
  }
}

// Función para solicitar y validar cantidad de producto
function ingresarCantidad(producto) {
  let cantidadProducto = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar: `));
  
  // Validar cantidad del producto seleccionado
  if (isNaN(cantidadProducto) || cantidadProducto < 1) {
    alert("Error: La cantidad ingresada no es válida.");
    return null;
  } else {
    return cantidadProducto;
  }
}

// Función para calcular el total
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

// Función para aplicar descuento
function aplicarDescuento(total, porcentajeDescuento) {
  return total * (1 - porcentajeDescuento / 100);
}

let continuar = true;

while (continuar) {
  // Mostrar opciones de producto
  alert(mostrarOpcionesProductos());

  // Solicitar selección de producto
  let productoSeleccionado = seleccionarProducto();

  if (productoSeleccionado !== null) {
    // Mostrar información del producto seleccionado
    alert(`Producto seleccionado: ${productoSeleccionado}`);

    // Solicitar cantidad del producto seleccionado
    let cantidadProducto = ingresarCantidad(productoSeleccionado);

    if (cantidadProducto !== null) {
      // Calcular total sin descuento
      let totalSinDescuento = calcularTotal(precioRemera, cantidadProducto);
      alert(`Total sin descuento: ${totalSinDescuento} pesos argentinos.`);

      // Aplicar descuento del 10% si se compran 3 o más remeras
      if (cantidadProducto >= 3) {
        let totalConDescuento = aplicarDescuento(totalSinDescuento, 10);
        alert(`Total con descuento del 10%: ${totalConDescuento} pesos argentinos.`);
      } else {
        alert("No se aplica descuento.");
      }
    }
  } else {
    continuar = false;
  }
}

alert("Gracias por su compra. ¡Hasta luego!");
