class CVCoches {
    constructor() {
        this._proveedores = [];
        this._compras = [];
        this._empleados = [];
        this._vehiculos = [];
        this._ventas = [];
        this._clientes = [];
        this._reparaciones = [];
    }	
}

function Proveedor(cif, nombre, direccion, telefono, tipo){
	this.cif= cif;
	this.nombre= nombre;
	this.direccion= direccion;
	this.telefono = telefono;
	this.tipo = tipo;
}

Proveedor.prototype.toHTMLRow= function(){
	return "<td>"+this.cif+"</td>"+
		   "<td>"+this.nombre+"</td>"+
		   "<td>"+this.direccion+"</td>"+
		   "<td>"+this.telefono+"</td>"+
		   "<td>"+this.tipo+"</td>";
}

function Compra(oVehiculo, importe, fecha, oProveedor, oEmpleado, comentarios){
	this.oVehiculo= oVehiculo;
	this.importe= importe;
	this.fecha= fecha;
	this.oProveedor = oProveedor;
	this.oEmpleado = oEmpleado;
	this.comentarios = comentarios;
}

Compra.prototype.toHTMLRow= function(){
	return "<td>"+this.oVehiculo+"</td>"+
		   "<td>"+this.importe+"</td>"+
		   "<td>"+this.fecha+"</td>"+
		   "<td>"+this.oProveedor+"</td>"+
		   "<td>"+this.oEmpleado+"</td>"+
		   "<td>"+this.comentarios+"</td>";
}

function Empleado(dni, nombre, apellidos, numVentas, salario){
	this.dni= dni;
	this.nombre= nombre;
	this.apellidos= apellidos;
	this.numVentas = numVentas;
	this.salario = salario;
}

Empleado.prototype.toHTMLRow= function(){
	return "<td>"+this.dni+"</td>"+
		   "<td>"+this.nombre+"</td>"+
		   "<td>"+this.apellidos+"</td>"+
		   "<td>"+this.numVentas+"</td>"+
		   "<td>"+this.salario+"</td>";
}

function Cliente(dni, nombre, apellidos, telefono){
	this.dni= dni;
	this.nombre= nombre;
	this.apellidos= apellidos;
	this.telefono = telefono;
}

Cliente.prototype.toHTMLRow= function(){
	return "<td>"+this.dni+"</td>"+
		   "<td>"+this.nombre+"</td>"+
		   "<td>"+this.apellidos+"</td>"+
		   "<td>"+this.telefono+"</td>";
}

function Venta(oVehiculo, oCliente, oEmpleado, fecha, comentarios){
	this.oVehiculo= oVehiculo;
	this.importe= importe;
	this.fecha= fecha;
	this.oProveedor = oProveedor;
	this.oEmpleado = oEmpleado;
	this.comentarios = comentarios;
}

Venta.prototype.toHTMLRow= function(){
	return "<td>"+this.oVehiculo+"</td>"+
		   "<td>"+this.importe+"</td>"+
		   "<td>"+this.fecha+"</td>"+
		   "<td>"+this.oProveedor+"</td>"+
		   "<td>"+this.oEmpleado+"</td>"+
		   "<td>"+this.comentarios+"</td>";
}

function Vehiculo(matricula, marca, modelo, tasacion, combustible, plazas){
	this.matricula= matricula;
	this.marca= marca;
	this.modelo= modelo;
	this.tasacion= tasacion;
	this.combustible= combustible;	
	this.plazas= plazas;
}

Vehiculo.prototype.toHTMLRow= function(){
	return "<td>"+this.matricula+"</td>"+
		   "<td>"+this.marca+"</td>"+
		   "<td>"+this.modelo+"</td>"+
		   "<td>"+this.tasacion+"</td>"+
		   "<td>"+this.combustible+"</td>"+
		   "<td>"+this.plazas+"</td>";
}

function Coche(matricula, marca, modelo, tasacion, combustible, plazas, numPuertas, tapiceria, tipoCoche){
	Vehiculo.call(this, matricula, marca, modelo, tasacion, combustible, plazas);
	this.numPuertas= numPuertas;
	this.tapiceria = tapiceria;
	this.tipoCoche = tipoCoche;
}

Coche.prototype= Object.create(Vehiculo.prototype);
Coche.prototype.constructor= Coche;

Coche.prototype.toHTMLRow= function(){
	return "<td>"+this.matricula+"</td>"+
		   "<td>"+this.marca+"</td>"+
		   "<td>"+this.modelo+"</td>"+
		   "<td>"+this.tasacion+"</td>"+
		   "<td>"+this.combustible+"</td>"+
		   "<td>"+this.plazas+"</td>"+
		   "<td>"+this.numPuertas+"</td>"+
		   "<td>"+this.tapiceria+"</td>"+
		   "<td>"+this.tipoCoche+"</td>";
}

function Camion(matricula, marca, modelo, tasacion, combustible, plazas, cargaMaxima, tipoCarga, capacidadCombustible){
	Vehiculo.call(this, matricula, marca, modelo, tasacion, combustible, plazas);
	this.cargaMaxima= cargaMaxima;
	this.tipoCarga= tipoCarga;
	this.capacidadCombustible= capacidadCombustible;
}

Camion.prototype= Object.create(Vehiculo.prototype);
Camion.prototype.constructor= Camion;

Camion.prototype.toHTMLRow= function(){
	return "<td>"+this.matricula+"</td>"+
		   "<td>"+this.marca+"</td>"+
		   "<td>"+this.modelo+"</td>"+
		   "<td>"+this.tasacion+"</td>"+
		   "<td>"+this.combustible+"</td>"+
		   "<td>"+this.plazas+"</td>"+
		   "<td>"+this.cargaMaxima+"</td>"+
		   "<td>"+this.tipoCarga+"</td>"+
		   "<td>"+this.capacidadCombustible+"</td>";
}