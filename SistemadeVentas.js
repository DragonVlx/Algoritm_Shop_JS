class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombreProducto = nombre;
    this._precio = precio;
    this._contador = Producto.contadorProductos;
  }
  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombreProducto;
  }

  set nombre(nombre) {
    this._nombreProducto = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    return (this._precio = precio);
  }

  toString() {
    return `ID:${this._idProducto}  NOMBRE:${this._nombreProducto}  $:${this._precio}`;
  }
}
// clase orden ==========================================>
class Orden {
  static contadorOrdenes = 0;
  // Limite de productos es 5
  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._producto = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._producto.length < Orden.MAX_PRODUCTOS) {
      this._producto.push(producto);
    } else {
      console.log("Excedio el limite de productos");
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._producto) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }
  mostrarOrden() {
    let productoOrden = "";
    for (let producto of this._producto) {
      productoOrden += "\n{" + producto.toString() + "}";
    }

    console.log(
      `ORDEN:${this._idOrden} 
      TOTAL:$${this.calcularTotal()}, 
      ElEMENTOS: ${productoOrden}`
    );
  }
}

// test de las clases ================>

let producto1 = new Producto("EimiCD", 300);
let producto2 = new Producto("XboxSX", 200);
let producto3 = new Producto("Gearss", 200);
let producto4 = new Producto("Gamepass", 600);
let producto5 = new Producto("Portatil", 1100);
let producto6 = new Producto("Teclado", 900);
console.log(producto1.precio);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
// orden2.agregarProducto(producto6);
orden2.mostrarOrden();
