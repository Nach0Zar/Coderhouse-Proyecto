function crearArticulo(){
    let nombreArticulo=prompt("Ingrese el nombre del articulo");
    while(nombreArticulo==''){
        alert("El nombre no puede quedar vacio.")
        nombreArticulo=prompt("Ingrese el nombre del articulo");
    }
    let descripcion=prompt("Ingrese una breve descripcion del articulo");
    let precio=parseInt(prompt("Ingrese un valor positivo para el precio del articulo"));

    //reviso si el precio es un numero y si es mayor a 0
    while(!(/^(\d)+$/g.test(precio)) || precio<=0){
        alert("Error, valor incorrecto.")
        precio=parseInt(prompt("Ingrese un valor positivo para el precio del articulo"));
    }
    const articuloNuevo = new Articulo(nombreArticulo, descripcion, precio);
    return articuloNuevo;
}

class Articulo{
    constructor(nombreArticulo, descripcion, precio){
        this.nombreArticulo = nombreArticulo;
        this.descripcion = descripcion;
        this.precio = parseInt(precio);
    }
}

class CarritoCompras{
    constructor(){
        this.articulosSeleccionados = [];
        this.precioTotal = 0;
    }
    agregarArticulo(articulo){
        this.articulosSeleccionados.push(articulo);
        this.precioTotal += articulo.precio;
    }
    removerArticulo(articulo){
        this.articulosSeleccionados.splice(Array.indexOf(articulo, this.articulosSeleccionados));
        this.precioTotal -= articulo.precio;
    }
}

class Calculador{
    constructor(carritoCompras){
        this.carritoCompras= carritoCompras;
    }
    calcularCuotas(cuotas){
        return this.carritoCompras.precioTotal/parseInt(cuotas);
    }
    costoTotal(){
        return this.carritoCompras;
    }
}

//creo dos articulos, los agrego al carrito y pago en 12 cuotas el valor total.

const carrito = new CarritoCompras();
const calculador = new Calculador(carrito);
const articuloUno = crearArticulo(); 
const articuloDos = crearArticulo();
carrito.agregarArticulo(articuloUno);
carrito.agregarArticulo(articuloDos);
alert(calculador.calcularCuotas(12));


