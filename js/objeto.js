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

    //ALTA CONDUCTOR
	altaProveedor(oProveedor){
		var bEncontrado= false;
		var sMensaje = "";
		
		for(var i=0; i<this._proveedores.length && bEncontrado==false; i++){
			if(this._proveedores[i].cif==oProveedor.cif && this._proveedores[i] instanceof Proveedor){
				bEncontrado= true;
			}
		}
		if (bEncontrado == true) {
			sMensaje = "Proveedor dado de alta anteriormente";
		}else{
			this._proveedores.push(oProveedor);
			sMensaje = "Proveedor dado de alta";
		}
			
		return sMensaje;
	}
	//ALTA EMPLEADO
	altaEmpleado(oEmpleado){
		var bEncontrado= false;
		var sMensaje = "";
		
		for(var i=0; i<this._empleados.length && bEncontrado==false; i++){
			if(this._empleados[i].dni==oEmpleado.dni && this._empleados[i] instanceof Empleado){
				bEncontrado= true;
			}
		}
		if (bEncontrado == true) {
			sMensaje = "Empleado dado de alta anteriormente";
		}else{
			this._empleados.push(oEmpleado);
			sMensaje = "Empleado dado de alta";
		}
			
		return sMensaje;
	}
	//ALTA CLIENTE
	altaCliente(oCliente){
		var bEncontrado= false;
		var sMensaje = "";
		
		for(var i=0; i<this._clientes.length && bEncontrado==false; i++){
			if(this._clientes[i].dni==oCliente.dni && this._clientes[i] instanceof Cliente){
				bEncontrado= true;
			}
		}
		if (bEncontrado == true) {
			sMensaje = "Cliente dado de alta anteriormente";
		}else{
			this._clientes.push(oCliente);
			sMensaje = "Cliente dado de alta";
		}
			
		return sMensaje;
	}
	//ALTA VEHICULO
	altaVehiculo(oVehiculo){
		var bEncontrado= false;
		var sMensaje = "";
		
		for(var i=0; i<this._vehiculos.length && bEncontrado==false; i++){
			if(this._vehiculos[i].matricula==oVehiculo.matricula && this._vehiculos[i] instanceof Vehiculo){
				bEncontrado= true;
			}
		}
		if (bEncontrado == true) {
			sMensaje = "Vehiculo dado de alta anteriormente";
		}else{
			this._vehiculos.push(oVehiculo);
			sMensaje = "Vehiculo dado de alta";
		}
			
		return sMensaje;
	}

	//ALTA COMPRA
	altaCompra(oCompra)
	{
		var bEncontrado = false;
		var sMensaje = '';
	}

}

function Proveedor(cif, nombre, direccion, telefono){
	this.cif= cif;
	this.nombre= nombre;
	this.direccion= direccion;
	this.telefono = telefono;
}

Proveedor.prototype.toHTMLRow = function(){
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