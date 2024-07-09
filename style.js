// Capturar entradas mediante prompt()
let nombreUsuario = prompt("Ingrese su nombre: ").toUpperCase();
let apellidoUsuario = prompt("Ingrese su apellido: ").toUpperCase();

// Saludo
alert(`¡Hola ${nombreUsuario} ${apellidoUsuario}! Bienvenido a la tienda Yonkys`);

// Declarar productos como un array de objetos
const productos = [
  { nombre: "Remera 1", precio: 6500 },
  { nombre: "Remera 2", precio: 6300 },
  { nombre: "Remera 3", precio: 7000 }
];

// Función para mostrar opciones de productos
function mostrarOpcionesProductos() {
  let opcionesProductos = "\nOpciones de productos:\n";
  productos.forEach((producto, index) => {
    opcionesProductos += `${index + 1}. ${producto.nombre} - Precio: ${producto.precio}$\n`;
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
  let cantidadProducto = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} que desea comprar: `));
  
  // Validar cantidad del producto seleccionado
  if (isNaN(cantidadProducto) || cantidadProducto < 1) {
    alert("Error: La cantidad ingresada no es válida.");
    return null;
  } else {
    return cantidadProducto;
  }
}

// Función para calcular el total sin descuento
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

// Función para aplicar descuento solo al final si corresponde
function aplicarDescuentoSiAplica(total, porcentajeDescuento) {
  return total * (1 - porcentajeDescuento / 100);
}

let continuar = true;
let productosSeleccionados = [];
let totalProductosSinDescuento = 0;

while (continuar) {
  // Mostrar opciones de producto
  alert(mostrarOpcionesProductos());

  // Solicitar selección de producto
  let productoSeleccionado = seleccionarProducto();

  if (productoSeleccionado !== null) {
    // Mostrar información del producto seleccionado
    alert(`Producto seleccionado: ${productoSeleccionado.nombre}`);

    // Solicitar cantidad del producto seleccionado
    let cantidadProducto = ingresarCantidad(productoSeleccionado);

    if (cantidadProducto !== null) {
      // Calcular total sin descuento
      let totalSinDescuento = calcularTotal(productoSeleccionado.precio, cantidadProducto);
      alert(`Total sin descuento: ${totalSinDescuento} pesos argentinos.`);

      // Agregar producto al detalle
      productosSeleccionados.push({
        producto: productoSeleccionado.nombre,
        cantidad: cantidadProducto,
        totalSinDescuento: totalSinDescuento
      });

      totalProductosSinDescuento += totalSinDescuento;

      // Preguntar si desea seguir comprando
      continuar = confirm("¿Desea agregar más productos?");
    }
  } else {
    continuar = false;
  }
}

// Aplicar descuento solo al final si corresponde
let totalProductosConDescuento = totalProductosSinDescuento;
if (productosSeleccionados.length >= 3) {
  totalProductosConDescuento = aplicarDescuentoSiAplica(totalProductosSinDescuento, 10);
}

// Mostrar detalle de productos seleccionados
let detalleProductos = "\nDetalle de Productos Seleccionados:\n";
productosSeleccionados.forEach((producto, index) => {
  detalleProductos += `Producto ${index + 1}: ${producto.producto} - Cantidad: ${producto.cantidad} - Total: ${producto.totalSinDescuento} pesos argentinos\n`;
});
alert(detalleProductos);

// Mostrar total de productos y descuento solo al final si aplica
if (productosSeleccionados.length > 0) {
  alert(`Total de Productos Seleccionados: ${productosSeleccionados.length}\nTotal a Pagar: ${totalProductosConDescuento} pesos argentinos`);
} else {
  alert("No se han seleccionado productos.");
}

alert("Gracias por su compra. ¡Hasta luego!");
