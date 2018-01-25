var cvCoches = new CVCoches();

//BOTONES PARA MOSTRAR FORMULARIOS

var oBtnAltaProveedor= document.getElementById("btnAltaProveedor");
oBtnAltaProveedor.addEventListener("click",altaProveedor,false);

var oBtnAltaInicio= document.getElementById("btnInicio");
oBtnAltaInicio.addEventListener("click",ocultarFormularios,false);

var oBtnAltaEmpleado= document.getElementById("btnAltaEmpleado");
oBtnAltaEmpleado.addEventListener("click",altaEmpleado,false);

var oBtnAltaVehiculo= document.getElementById("btnAltaVehiculo");
oBtnAltaVehiculo.addEventListener("click",altaVehiculo,false);

var oBtnAltaCliente= document.getElementById("btnAltaCliente");
oBtnAltaCliente.addEventListener("click",altaCliente,false);

var oBtnRegCompra= document.getElementById("btnRegistrarCompra");
oBtnRegCompra.addEventListener("click",mostrarRegistrarCompra,false);

var oBtnRegVenta= document.getElementById("btnRegistrarVenta");
oBtnRegVenta.addEventListener("click",mostrarRegistrarVenta,false);

var oBtnRegRep= document.getElementById("btnRegistrarReparacion");
oBtnRegRep.addEventListener("click",mostrarRegistrarRep,false);

//BOTONES ALTAS DE LOS FORMULARIOS

var oBtnEnviarAltaProveedor = document.getElementById("btnEnviarAltaProveedor");
oBtnEnviarAltaProveedor.addEventListener("click", enviarAltaProveedor, false);

var oBtnEnviarAltaEmpleado = document.getElementById("btnEnviarAltaEmpleado");
oBtnEnviarAltaEmpleado.addEventListener("click", enviarAltaEmpleado, false);

var oBtnEnviarAltaVehiculo = document.getElementById("btnEnviarAltaVehiculo");
oBtnEnviarAltaVehiculo.addEventListener("click", enviarAltaVehiculo, false);

var oBtnEnviarAltaCliente = document.getElementById("btnEnviarAltaCliente");
oBtnEnviarAltaCliente.addEventListener("click", enviarAltaCliente, false);


function altaProveedor(){
	
	ocultarFormularios();
	var formAltaProv = document.getElementById("formAltaProv");
	formAltaProv.style.display = "block";
	formAltaProv.btnEnviarAltaProveedor.addEventListener('click',validarAltaProv,false);
	
}

function enviarAltaProveedor(){
	if (validarAltaProv()){
	var formAltaProv= document.getElementById("formAltaProv");
	var sMensaje = "";
		
	if(formAltaProv.cifProv.value=="" || formAltaProv.nomProv.value=="" || formAltaProv.dirProv.value=="" || 
		formAltaProv.telProv.value=="" || formAltaProv.tipoProv.value==""){
		sMensaje= "Debe Rellenar Todos los Campos.";				
	} else{
		var cifProv= formAltaProv.cifProv.value.trim();
		var nomProv= formAltaProv.nomProv.value.trim();
		var dirProv= formAltaProv.dirProv.value.trim();
		var telProv= formAltaProv.telProv.value.trim();
		var tipoProv= formAltaProv.tipoProv.value.trim();
		
		var oProveedor= new Proveedor(cifProv,nomProv,dirProv,telProv,tipoProv);
		
		sMensaje = cvCoches.altaProveedor(oProveedor);
        altaProveedor();
	}

	alert(sMensaje);
	}

}

function altaEmpleado(){
	
	ocultarFormularios();
	var formAltaEmp = document.getElementById("formAltaEmpleado");
	formAltaEmp.style.display = "block";
	formAltaEmp.btnEnviarAltaEmpleado.addEventListener('click',validarAltaEmpleado, false);
	
}

function enviarAltaEmpleado(){

	var formAltaEmpleado= document.getElementById("formAltaEmpleado");
	var sMensaje = "";
		
	if(formAltaEmpleado.dniEmp.value=="" || formAltaEmpleado.nomEmp.value=="" || formAltaEmpleado.apeEmp.value=="" || 
		formAltaEmpleado.ventasEmp.value=="" || formAltaEmpleado.salEmp.value==""){
		sMensaje= "Debe Rellenar Todos los Campos.";				
	} else{
		var dniEmp= formAltaEmpleado.dniEmp.value.trim();
		var nomEmp= formAltaEmpleado.nomEmp.value.trim();
		var apeEmp= formAltaEmpleado.apeEmp.value.trim();
		var ventasEmp= formAltaEmpleado.ventasEmp.value.trim();
		var salEmp= formAltaEmpleado.salEmp.value.trim();
		
		var oEmpleado= new Empleado(dniEmp,nomEmp,apeEmp,ventasEmp,salEmp);
		
		sMensaje = cvCoches.altaEmpleado(oEmpleado);
        altaEmpleado();
	}

	alert(sMensaje);

}

function altaVehiculo(){
	
	ocultarFormularios();
	var formAltaVeh = document.getElementById("formAltaVeh");
	formAltaVeh.style.display = "block";
	formAltaVeh.btnEnviarAltaVehiculo.addEventListener('click',validarAltaVeh, false);
	
}

function enviarAltaVehiculo(){



}

function altaCliente(){
	
	ocultarFormularios();
	var formAltaCli = document.getElementById("formAltaCli");
	formAltaCli.style.display = "block";
	formAltaCli.btnEnviarAltaCliente.addEventListener('click',validarAltaCli, false);
	
}

function enviarAltaCliente(){

	var formAltaCli= document.getElementById("formAltaCli");
	var sMensaje = "";
		
	if(formAltaCli.dniCliente.value=="" || formAltaCli.nomCliente.value=="" || formAltaCli.apCliente.value=="" || 
		formAltaCli.telCliente.value==""){
		sMensaje= "Debe Rellenar Todos los Campos.";				
	} else{
		var dniCliente= formAltaCli.dniCliente.value.trim();
		var nomCliente= formAltaCli.nomCliente.value.trim();
		var apCliente= formAltaCli.apCliente.value.trim();
		var telCliente= formAltaCli.telCliente.value.trim();
		
		var oCLiente= new Cliente(dniCliente,nomCliente,apCliente,telCliente);
		
		sMensaje = cvCoches.altaCliente(oCliente);
        altaCliente();
	}

	alert(sMensaje);

}

function mostrarRegistrarCompra(){
	ocultarFormularios();
	var formRegCompra = document.getElementById("formRegCompra");

	formRegCompra.importeCompraVehiculo.value="";
	formRegCompra.fechaCompraVehiculo.value="";
	formRegCompra.observCompraVehiculo.value="";
	rellenarCombosCompra();
	formRegCompra.style.display="block";

}

//-------FUNCION REGISTRAR COMPRA--------





function mostrarRegistrarVenta(){
	ocultarFormularios();
	var formRegVenta = document.getElementById("formRegVenta");

	formRegVenta.observVentaVehiculo.value="";
	rellenarCombosVenta();
	formRegVenta.style.display="block";
}


//-------FUNCION REGISTRAR VENTA-------


function mostrarRegistrarRep(){
	ocultarFormularios();
	rellenarCombosReparacion();
	var formRegRep = document.getElementById("formRegReparacion");
	formRegRep.style.display = "block";
	formRegRep.descRepVehiculo.value="";

}




function ocultarFormularios(){
	document.getElementById("formAltaProv").style.display = "none";
	document.getElementById("formAltaEmpleado").style.display = "none";
	document.getElementById("formAltaVeh").style.display = "none";
	document.getElementById("formAltaCli").style.display = "none";
	document.getElementById("formRegCompra").style.display = "none";
	document.getElementById("formRegVenta").style.display = "none";
	document.getElementById("formRegReparacion").style.display = "none";
}

var oBtnTipoCoche= document.getElementById("radioCoche");
oBtnTipoCoche.addEventListener("click",mostrarTipoCoche,false);

var oBtnTipoCamion= document.getElementById("radioCamion");
oBtnTipoCamion.addEventListener("click",mostrarTipoCamion,false);

function mostrarTipoCoche(){
	document.getElementById("tipoCamion").style.display = "none";
	document.getElementById("tipoCoche").style.display = "block";

}

function mostrarTipoCamion(){
	document.getElementById("tipoCoche").style.display = "none";
	document.getElementById("tipoCamion").style.display = "block";

}

//FUNCIONES PARA RELLENAR COMBOS
function rellenarCombosCompra(){
	var formRegCompra = document.getElementById("formRegCompra");
	var selectCompraProv = document.getElementById("selectCompraProv");
	

	//Combo proveedores
	if (cvCoches._proveedores.length==0){
		
		var optionProv = document.createElement("option");
		var textnode = document.createTextNode("No hay proveedores dados de alta");
		optionProv.appendChild(textnode);
		optionProv = selectCompraProv.appendChild(optionProv);
		//formRegCompra.appendChild(option);
		//formRegCompra.selectCompraProv.innerHTML = '<option>No hay proveedores dados de alta</option>';
	} else {
		for (var i=0;i<cvCoches._proveedores.length;i++){
			var optionProv = document.createElement("option");
		optionProv.setAttribute("value",cvCoches._proveedores[i].cif)
		var textnode = document.createTextNode( cvCoches._proveedores[i].cif+' - '+cvCoches._proveedores[i].nombre);
		optionProv.appendChild(textnode);
		optionProv = selectCompraProv.appendChild(optionProv);
		
		}
	}

	//Combo empleados
	if (cvCoches._empleados.length==0){
		formRegCompra.selectCompraEmp.innerHTML = '<option>No hay empleados dados de alta</option>';
	} else {
		formRegCompra.selectCompraEmp.innerHTML = '';
		for (var i=0;i<cvCoches._empleados.length;i++){
		formRegCompra.selectCompraEmp.innerHTML += '<option value="'+cvCoches._empleados[i].dni+'">'+cvCoches._empleados[i].dni+' - '+cvCoches._empleados[i].nombre+' '+cvCoches._empleados[i].apellidos+'</option>';

		
		}
	}

	//Combo Vehiculo
	if (cvCoches._vehiculos.length==0){
		formRegCompra.selectCompraVehiculo.innerHTML = '<option>No hay vehiculos dados de alta</option>';
	} else {
		formRegCompra.selectCompraVehiculo.innerHTML = '';
		for (var i=0;i<cvCoches._vehiculos.length;i++){
		formRegCompra.selectCompraVehiculo.innerHTML += '<option value="'+cvCoches._vehiculos[i].matricula+'">'+cvCoches._vehiculos[i].matricula+' - '+cvCoches._vehiculos[i].marca+' '+cvCoches._vehiculos[i].modelo+'</option>';

		
		}
	}	
}

function rellenarCombosVenta(){
	var formRegVenta = document.getElementById("formRegVenta");

	//Combo clientes
	if (cvCoches._clientes.length==0){
		formRegVenta.selectVentaCliente.innerHTML = '<option>No hay clientes dados de alta</option>';
	} else {
		formRegVenta.selectVentaCliente.innerHTML = '';
		for (var i=0;i<cvCoches._clientes.length;i++){
		formRegVenta.selectVentaCliente.innerHTML += '<option value="'+cvCoches._clientes[i].dni+'">'+cvCoches._clientes[i].dni+' - '+cvCoches._clientes[i].nombre+' '+cvCoches._clientes[i].apellidos+'</option>';

		
		}
	}

	//Combo empleados
	if (cvCoches._empleados.length==0){
		formRegVenta.selectVentaEmp.innerHTML = '<option>No hay empleados dados de alta</option>';
	} else {
		formRegVenta.selectVentaEmp.innerHTML = '';
		for (var i=0;i<cvCoches._empleados.length;i++){
		formRegVenta.selectVentaEmp.innerHTML += '<option value="'+cvCoches._empleados[i].dni+'">'+cvCoches._empleados[i].dni+' - '+cvCoches._empleados[i].nombre+' '+cvCoches._empleados[i].apellidos+'</option>';

		
		}
	}

	//Combo Vehiculo
	if (cvCoches._vehiculos.length==0){
		formRegVenta.selectVentaVehiculo.innerHTML = '<option>No hay vehiculos dados de alta</option>';
	} else {
		formRegVenta.selectVentaVehiculo.innerHTML = '';
		for (var i=0;i<cvCoches._vehiculos.length;i++){
		formRegVenta.selectVentaVehiculo.innerHTML += '<option value="'+cvCoches._vehiculos[i].matricula+'">'+cvCoches._vehiculos[i].matricula+' - '+cvCoches._vehiculos[i].marca+' '+cvCoches._vehiculos[i].modelo+'</option>';

		
		}
	}
}

function rellenarCombosReparacion(){
	var formRegRep = document.getElementById("formRegReparacion");

	//Combo Vehiculo
	if (cvCoches._vehiculos.length==0){
		formRegRep.selectRepVehiculo.innerHTML = '<option>No hay vehiculos dados de alta</option>';
	} else {
		formRegRep.selectRepVehiculo.innerHTML = '';
		for (var i=0;i<cvCoches._vehiculos.length;i++){
		formRegRep.selectVentaVehiculo.innerHTML += '<option value="'+cvCoches._vehiculos[i].matricula+'">'+cvCoches._vehiculos[i].matricula+' - '+cvCoches._vehiculos[i].marca+' '+cvCoches._vehiculos[i].modelo+'</option>';

		
		}
	}
}

//--------------VALIDACION----------------------

//validacion formulario alta proveedor
function validarAltaProv()
{

	var bValido = true;
	var sError = "";

	//campo cif
	var sCif = formAltaProv.cifProv.value.trim();
	formAltaProv.cifProv.value = formAltaProv.cifProv.value.trim();
	var oExpReg = /^[a-zA-Z]\d{8}$/i;

	if (oExpReg.test(sCif) == false)
	{
		formAltaProv.cifProv.classList.add("error");
		formAltaProv.cifProv.focus();
		bValido = false;
		sError = "El CIF tiene que tener una letra y 8 numeros \n"; 
	} else {
		formAltaProv.cifProv.classList.remove("error");
	}

	//campo nombre
	var sNombre = formAltaProv.nomProv.value.trim();
	formAltaProv.nomProv.value = formAltaProv.nomProv.value.trim();
	var oExpReg = /^[a-zA-Z\s]{6,40}$/i;

	if (oExpReg.test(sNombre) == false)
	{
		formAltaProv.nomProv.classList.add("error");
		formAltaProv.nomProv.focus();
		bValido = false;
		sError += "El nombre solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
	} else {
		formAltaProv.nomProv.classList.remove("error");
	}

	//campo direccion
	var sDireccion = formAltaProv.dirProv.value.trim();
	formAltaProv.dirProv.value = formAltaProv.dirProv.value.trim();

	if (sDireccion == '')
	{
		formAltaProv.dirProv.classList.add("error");
		formAltaProv.dirProv.focus();
		bValido = false;
		sError += "Debe escribir una direccion \n"; 
	} else {
		formAltaProv.dirProv.classList.remove("error");
	}


	//campo telefono
	var nTelefono = formAltaProv.telProv.value.trim();
	formAltaProv.telProv.value = formAltaProv.telProv.value.trim();
	var oExpReg = /^[6|7][0-9]{8}$/;

	if (oExpReg.test(nTelefono) == false)
	{
		formAltaProv.telProv.classList.add("error");
		formAltaProv.telProv.focus();
		bValido = false;
		sError += "El telefono tiene que empezar por 6 o 7 y tiene que tener 9 cifras \n"; 
	} else {
		formAltaProv.telProv.classList.remove("error");
	}

	//campo tipo
	var sTipo = formAltaProv.tipoProv.value.trim();
	formAltaProv.tipoProv.value = formAltaProv.tipoProv.value.trim();
    //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
	if (sTipo=='') 
	{
		formAltaProv.tipoProv.classList.add('error');
		formAltaProv.tipoProv.focus();
		bValido = false;
		sError += 'Debe escribir un tipo';
	}
	else{
		formAltaProv.tipoProv.classList.remove('error');
	}

	if (bValido == false) 
	{
		alert(sError);
		oE.preventDefault();
		return false;
	} else {
		return true;
	}
}

//validacion formulario alta empleado
function validarAltaEmpleado(oEvento)
{
	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	//campo dni
	var sDNI = formAltaEmpleado.dniEmp.value.trim();
	formAltaEmpleado.dniEmp.value = formAltaEmpleado.dniEmp.value.trim();
	oExpReg = /^\d{8}[a-zA-Z]$/i;

	if (oExpReg.test(sDNI)==false) 
	{
		formAltaEmpleado.dniEmp.classList.add('error');
		formAltaEmpleado.dniEmp.focus();
		bValido = false;
		sError = 'El dni tiene que tener 8 cifras y una letra \n';
	}
	else
		formAltaEmpleado.dniEmp.classList.remove('error');

	//campo nombre
	var sNombre = formAltaEmpleado.nomEmp.value.trim();
	formAltaEmpleado.nomEmp.value = formAltaEmpleado.nomEmp.value.trim();
	var oExpReg = /^[a-zA-Z\s]{6,40}$/i;

	if (oExpReg.test(sNombre) == false)
	{
		formAltaEmpleado.nomEmp.classList.add("error");
		formAltaEmpleado.nomEmp.focus();
		bValido = false;
		sError += "El nombre solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
	} else {
		formAltaEmpleado.nomEmp.classList.remove("error");
	}

	//campo apellido
	var sApellidos = formAltaEmpleado.apeEmp.value.trim();
	formAltaEmpleado.apeEmp.value = formAltaEmpleado.apeEmp.value.trim();
	var oExpReg = /^[a-zA-Z\s]{6,40}$/i;

	if (oExpReg.test(sNombre) == false)
	{
		formAltaEmpleado.apeEmp.classList.add("error");
		formAltaEmpleado.apeEmp.focus();
		bValido = false;
		sError += "Los apellidos solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
	} else {
		formAltaEmpleado.apeEmp.classList.remove("error");
	}

	//campo nº de ventas
	var nVentas = formAltaEmpleado.ventasEmp.value.trim();
	formAltaEmpleado.ventasEmp.value = formAltaEmpleado.ventasEmp.value.trim();
	var oExpReg = /^\d+$/;

	if (oExpReg.test(nVentas) == false)
	{
		formAltaEmpleado.ventasEmp.classList.add("error");
		formAltaEmpleado.ventasEmp.focus();
		bValido = false;
		sError += "Solo puede introducir digitos \n"; 
	} else {
		formAltaEmpleado.ventasEmp.classList.remove("error");
	}

	//campo salario 
	var nSalario = formAltaEmpleado.salEmp.value.trim();
	formAltaEmpleado.salEmp.value = formAltaEmpleado.salEmp.value.trim();
	var oExpReg = /^\d{1,5}$/;

	if (oExpReg.test(nSalario) == false)
	{
		formAltaEmpleado.salEmp.classList.add("error");
		formAltaEmpleado.salEmp.focus();
		bValido = false;
		sError += "Solo puede introducir digitos \n"; 
	} else {
		formAltaEmpleado.salEmp.classList.remove("error");
	}


	if (bValido == false) 
	{
		alert(sError);
		oE.preventDefault();
	}
}

//validacion formulario alta coche
function validarAltaVeh(oEvento)
{
	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	//campo matricula
	var sMatricula = formAltaVeh.matVehiculo.value.trim();
	formAltaVeh.matVehiculo.value = formAltaVeh.matVehiculo.value.trim();
	var oExpReg = /^\d{4}[BCDFGHJK][BCDFGHJKLMNÑPQRSTVWYZ]{2}$/i;

	if (oExpReg.test(sMatricula)==false) 
	{
		formAltaVeh.matVehiculo.classList.add('error');
		formAltaVeh.matVehiculo.focus();
		bValido = false;
		sError = 'Matricula incorrecta. Debe ser 4 numeros y 3 letras. Ejemplo : 2341KJD \n';
	}
	else
		formAltaVeh.matVehiculo.classList.remove('error');

	//campo marca
	var sMarca = formAltaVeh.marcaVehiculo.value.trim();
	formAltaVeh.marcaVehiculo.value = formAltaVeh.marcaVehiculo.value.trim();
	var oExpReg = /^\D{2,40}$/i;

	if (oExpReg.test(sMarca)==false) 
	{
		formAltaVeh.marcaVehiculo.classList.add('error');
		formAltaVeh.marcaVehiculo.focus();
		bValido = false;
		sError += 'Introduzca una marca entre 2 y 40 caracteres \n';
	}
	else
		formAltaVeh.marcaVehiculo.classList.remove('error');

	//campo modelo
	var sModelo = formAltaVeh.modVehiculo.value.trim();
	formAltaVeh.modVehiculo.value = formAltaVeh.modVehiculo.value.trim();
	var oExpReg = /^\w{2,40}$/i;

	if (oExpReg.test(sModelo)==false) 
	{
		formAltaVeh.modVehiculo.classList.add('error');
		formAltaVeh.modVehiculo.focus();
		bValido = false;
		sError += 'Introduzca un modelo entre 2 y 40 caracteres \n';
	}
	else
		formAltaVeh.modVehiculo.classList.remove('error');

	//campo tasasion
	var nTasasion = formAltaVeh.tasVehiculo.value.trim();
	formAltaVeh.tasVehiculo.value = formAltaVeh.tasVehiculo.value.trim();
	var oExpReg = /^\d{1,6}$/;

	if (oExpReg.test(nTasasion)==false) 
	{
		formAltaVeh.tasVehiculo.classList.add('error');
		formAltaVeh.tasVehiculo.focus();
		bValido = false;
		sError += 'Debe introducir una cantidad valida \n';
	}
	else
		formAltaVeh.tasVehiculo.classList.remove('error');

	//campo combustible
	var sCombustible = formAltaVeh.combVehiculo.value.trim();
	formAltaVeh.combVehiculo.value = formAltaVeh.combVehiculo.value.trim();
	var oExpReg = /(\W|^)(Diesel|Gasolina|diesel|gasolina|DIESEL|GASOLINA)(\W|$)/;

	if (oExpReg.test(sCombustible)==false) 
	{
		formAltaVeh.combVehiculo.classList.add('error');
		formAltaVeh.combVehiculo.focus();
		bValido = false;
		sError += 'El combustible solo puede ser Diesel o Gasolina \n';
	}
	else
		formAltaVeh.combVehiculo.classList.remove('error');

	//campo plazas
	var nPlazas = formAltaVeh.plazasVehiculo.value.trim();
	formAltaVeh.plazasVehiculo.value = formAltaVeh.plazasVehiculo.value.trim();
	var oExpReg = /^[2|4|5|7|8]$/;

	if (oExpReg.test(nPlazas)==false) 
	{
		formAltaVeh.plazasVehiculo.classList.add('error');
		formAltaVeh.plazasVehiculo.focus();
		bValido = false;
		sError += 'Los vehiculos pueden tener 2,4,5,6,7 o 8 plazas \n';
	}
	else
		formAltaVeh.plazasVehiculo.classList.remove('error');

	//campo input
	var inputs = formAltaVeh.querySelectorAll('input[type=radio]');
	var contador = 0;
	var tipo = '';
	for(var i = 0; i<inputs.length; i++)
	{
		if (inputs[i].checked)
		{
			contador++;
			if (inputs[i].value=='coche') 
				tipo='coche' ;
			else
				tipo='camion';
		}
	}

	if (contador==0) 
	{
		formAltaVeh.querySelector('.radio').classList.add('error');
		bValido=false;
		sError += 'Debe elegir un tipo de vehiculo \n';
	}
	else
	{
		formAltaVeh.querySelector('.radio').classList.remove('error');
		//vehiculo tipo coche
		if (tipo=='coche') 
		{
			//campo numero puertas
			var nPuertas = formAltaVeh.nPuertasCoche.value.trim();
			formAltaVeh.nPuertasCoche.value = formAltaVeh.nPuertasCoche.value.trim();
			var oExpReg = /^[3|5]$/;

			if (oExpReg.test(nPuertas)==false) 
			{
				formAltaVeh.nPuertasCoche.classList.add('error');
				formAltaVeh.nPuertasCoche.focus();
				bValido = false;
				sError += 'Los vehiculos pueden 3 o 5 puertas \n';
			}
			else
				formAltaVeh.nPuertasCoche.classList.remove('error');	

			//campo tapiceria 
			var sTapiceria = formAltaVeh.tapiceriaCoche.value.trim();
			formAltaVeh.tapiceriaCoche.value = formAltaVeh.tapiceriaCoche.value.trim();
			var oExpReg = /(\W|^)(Cuero|Tela|Vinilo|cuero|tela|vinilo|CUERO|TELA|VINILO)(\W|$)/;

			if (oExpReg.test(sTapiceria)==false) 
			{
				formAltaVeh.tapiceriaCoche.classList.add('error');
				formAltaVeh.tapiceriaCoche.focus();
				bValido = false;
				sError += 'La tapiceria puede ser cuero, tela y vinilo \n';
			}
			else
				formAltaVeh.tapiceriaCoche.classList.remove('error');


			//campo tipo coche 
			var sTipoCoche = formAltaVeh.tpCoche.value.trim();
			formAltaVeh.tpCoche.value = formAltaVeh.tpCoche.value.trim();
			var oExpReg = /(\W|^)(Turismo|Todoterreno|Monovolumen|Furgoneta|Berlina|turismo|todoterreno|monovolumen|furgoneta|berlina|TURISMO|TODOTERRENO|MONOVOLUMEN|FURGONETA|BERLINA)(\W|$)/;

			if (oExpReg.test(sTipoCoche)==false) 
			{
				formAltaVeh.tpCoche.classList.add('error');
				formAltaVeh.tpCoche.focus();
				bValido = false;
				sError += 'El tipo puede ser turismo, todoterreno, monovolumen, furgoneta y berlina \n';
			}
			else
				formAltaVeh.tpCoche.classList.remove('error');

		}

		//vehiculo tipo camion
		else
		{
			//campo carga maxima 
			var nCargaMax = formAltaVeh.cargaCamion.value.trim();
			formAltaVeh.cargaCamion.value = formAltaVeh.cargaCamion.value.trim();
			var oExpReg = /^\d{1,5}$/;

			if (oExpReg.test(nCargaMax)==false) 
			{
				formAltaVeh.cargaCamion.classList.add('error');
				formAltaVeh.cargaCamion.focus();
				bValido = false;
				sError += 'Debe introducir una cantidad \n';
			}
			else
				formAltaVeh.cargaCamion.classList.remove('error');

			//campo tipo carga 
			var sTipoCarga = formAltaVeh.tipoCargaCamion.value.trim();
			formAltaVeh.tipoCargaCamion.value = formAltaVeh.tipoCargaCamion.value.trim();
			var oExpReg = /(\W|^)(Valiosa|Refrigerada|Peligrosa|Granel|Remolque|valiosa|refrigerada|peligrosa|granel|remolque|VALIOSA|REFRIGERADA|PELIGROSA|GRANEL|REMOLQUE)(\W|$)/;

			if (oExpReg.test(sTipoCarga)==false) 
			{
				formAltaVeh.tipoCargaCamion.classList.add('error');
				formAltaVeh.tipoCargaCamion.focus();
				bValido = false;
				sError += 'La carga puede ser valiosa, refrigerada, peligrosa, granel o remolque \n';
			}
			else
				formAltaVeh.tipoCargaCamion.classList.remove('error');

			//campo capacidad combustible 
			var nCapComb = formAltaVeh.capCombCamion.value.trim();
			formAltaVeh.capCombCamion.value = formAltaVeh.capCombCamion.value.trim();
			var oExpReg = /(\d|^)(500|1000|1500)(\d|$)/;

			if (oExpReg.test(nCapComb)==false) 
			{
				formAltaVeh.capCombCamion.classList.add('error');
				formAltaVeh.capCombCamion.focus();
				bValido = false;
				sError += 'La capacidad del combustible puede ser de 500, 1000 y 1500 \n';
			}
			else
				formAltaVeh.capCombCamion.classList.remove('error');
		}
		
	}

	if (bValido == false) 
	{
		alert(sError);
		oE.preventDefault();
	}		
}

 function validarAltaCli(oEvento)
 {
 	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	//campo dni
	var nDNI = formAltaCli.dniCliente.value.trim();
	formAltaCli.dniCliente.value = formAltaCli.dniCliente.value.trim();
	var oExpReg = /^\d{8}[a-zA-Z]$/;

	if (oExpReg.test(nDNI)==false) 
	{
		formAltaCli.dniCliente.classList.add('error');
		formAltaCli.dniCliente.focus();
		bValido = false;
		sError = 'El DNI tiene que tener 8 cifras y una letra \n';
	}
	else
		formAltaCli.dniCliente.classList.remove('error');

	//campo nombre
	var sNombre = formAltaCli.nomCliente.value.trim();
	formAltaCli.nomCliente.value = formAltaCli.nomCliente.value.trim();
	var oExpReg = /^[a-zA-Z\s]{6,40}$/;

	if (oExpReg.test(sNombre)==false) 
	{
		formAltaCli.nomCliente.classList.add('error');
		formAltaCli.nomCliente.focus();
		bValido = false;
		sError += 'El nombre tiene que tener entre 6 y 40 caracteres\n';
	}
	else
		formAltaCli.nomCliente.classList.remove('error');

	//campo apellidos
	var sApellidos = formAltaCli.apCliente.value.trim();
	formAltaCli.apCliente.value = formAltaCli.apCliente.value.trim();
	var oExpReg = /^[a-zA-Z\s]{6,40}$/;

	if (oExpReg.test(sApellidos)==false) 
	{
		formAltaCli.apCliente.classList.add('error');
		formAltaCli.apCliente.focus();
		bValido = false;
		sError += 'Los apellidos tienen que tener entre 6 y 40 caracteres\n';
	}
	else
		formAltaCli.apCliente.classList.remove('error');

	//campo telefono
	var nTelefono = formAltaCli.telCliente.value.trim();
	formAltaCli.telCliente.value = formAltaCli.telCliente.value.trim();
	var oExpReg = /^[6|7]\d{8}$/;

	if (oExpReg.test(nTelefono)==false) 
	{
		formAltaCli.telCliente.classList.add('error');
		formAltaCli.telCliente.focus();
		bValido = false;
		sError += 'El telefono tiene que tener 9 digitos y debe empezar por 6 o 7 \n';
	}
	else
		formAltaCli.telCliente.classList.remove('error');


	if (bValido == false) 
	{
		alert(sError);
		oE.preventDefault();
	}	
 }

/*plantilla validaciones
function validarAltaVeh(oEvento)
{
	var oE = oEvento || window.event;
	var bValido = true;
	var sError = "";

	if (bValido == false) 
	{
		alert(sError);
		oE.preventDefault();
	}	
}*/